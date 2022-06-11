import React from "react";
import { Wrapper } from "../components/util/Wrapper";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { LoginForm } from "src/components/forms/LoginForm";
import { Layout } from "src/components/Layout";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  return (
    <>
      <Layout>
        <Wrapper variant={"sm"}>
          <LoginForm />
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
