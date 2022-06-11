import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import React from "react";
import { usePostsQuery } from "src/generated/graphql";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { PostCard } from "src/components/util/PostCard";
// import NextLink from "next/link";
import { Wrapper } from "src/components/util/Wrapper";
import { useRouter } from "next/router";
import { Layout } from "src/components/Layout";

const PostsIndex = () => {
  const router = useRouter();

  const variables = {
    limit:
      typeof router.query.limit === "string" ? parseInt(router.query.limit) : 5,
    page:
      typeof router.query.page === "string" ? parseInt(router.query.page) : 0,
  };

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  return (
    <>
      <Layout>
        <br />
        <VStack>
          <Wrapper>
            <Box mr={2}>
              {/* <NextLink href={"/posts/new-post"}>
                <Button variant={"ghost"}>New Post</Button>
              </NextLink> */}
            </Box>
          </Wrapper>
          {(!fetching && !data) || !data?.posts.length ? (
            <PostCard key={0} />
          ) : (
            data.posts.map((p) => <PostCard key={p.id} data={p} />)
          )}

          <Wrapper bg={"inherit"}>
            <Flex>
              <Box ml={"auto"}>
                {variables.page > 1 ? (
                  <Button
                    onClick={() => {
                      router.push({
                        query: {
                          page: variables.page
                            ? (variables.page - 1).toString()
                            : "",
                        },
                      });
                    }}
                    mx={2}
                    variant={"link"}>
                    previous
                  </Button>
                ) : (
                  <></>
                )}
                <Button
                  onClick={() => {
                    router.push({
                      query: {
                        page: variables.page
                          ? (variables.page + 1).toString()
                          : 2,
                      },
                    });
                  }}
                  variant={"link"}>
                  next
                </Button>
              </Box>
            </Flex>
          </Wrapper>
        </VStack>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(PostsIndex);
