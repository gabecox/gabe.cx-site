import { dedupExchange, errorExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  LogoutMutation,
  MeQuery,
  MeDocument,
  LoginMutation,
  RegisterMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import router from "next/router";
import { isServer } from "./isServer";

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = "";
  if (isServer()) {
    cookie = ctx?.req?.headers?.cookie;
  }

  return {
    url: process.env.NEXT_PUBLIC_API_URL as string,
    fetchOptions: {
      credentials: "include" as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            logout: (_result, _args, cache, _info) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                () => ({ me: null })
              );
            },

            login: (_result, _args, cache, _info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    return {
                      me: result.login.user,
                    };
                  }
                }
              );
            },

            register: (_result, _args, cache, _info) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query;
                  } else {
                    return {
                      me: result.register.user,
                    };
                  }
                }
              );
            },
          },
        },
      }),
      errorExchange({
        onError: (err) => {
          if (err.message.includes("Not authenticated")) {
            router.reload;
            const toastEvent = new CustomEvent("toast", {
              detail: {
                title: "Error",
                description: "please log in",
                status: "error",
              },
            });
            document.dispatchEvent(toastEvent);
          } else if (err.message.includes("Not Gabe")) {
            router.reload;
            const toastEvent = new CustomEvent("toast", {
              detail: {
                title: "Error",
                description: "You need to be Gabe to do that",
                status: "error",
              },
            });
            document.dispatchEvent(toastEvent);
          } else {
            console.error(err);
            return;
          }
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  };
};
