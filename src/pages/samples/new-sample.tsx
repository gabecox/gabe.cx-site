import { withUrqlClient } from "next-urql";
import React from "react";
import { Wrapper } from "src/components/util/Wrapper";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { NewSampleForm } from "src/components/forms/NewSampleForm";
import { Heading } from "@chakra-ui/react";
import { Layout } from "src/components/Layout";

export const NewSample = () => {
  return (
    <>
      <Layout>
        <Wrapper variant={"md"}>
          <Heading pb={6}>New Sample</Heading>
          <NewSampleForm />
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(NewSample);
