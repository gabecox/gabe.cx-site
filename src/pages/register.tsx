import React from "react";
import { Wrapper } from "../components/util/Wrapper";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { RegisterForm } from "src/components/forms/RegisterForm";
import { Layout } from "src/components/Layout";

const Register = () => {
  return (
    <>
      <Layout>
        <Wrapper variant={"sm"}>
          <RegisterForm />
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Register);
