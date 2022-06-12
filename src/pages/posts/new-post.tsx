import { withUrqlClient } from "next-urql";
import React from "react";
import { Wrapper } from "src/components/util/Wrapper";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { NewPostForm } from "src/components/forms/NewPostForm";
import { Heading } from "@chakra-ui/react";
import { Layout } from "src/components/Layout";

export const NewPost = () => {
  return (
    <>
      <Layout>
        <Wrapper variant={"md"}>
          <Heading pb={6}>New Post</Heading>
          <NewPostForm />
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(NewPost);
