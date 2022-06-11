import { withUrqlClient } from "next-urql";
import React from "react";
import { Wrapper } from "src/components/util/Wrapper";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { ContactForm } from "src/components/forms/ContactForm";
import { Layout } from "src/components/Layout";

export const Contact = () => {
  return (
    <>
      <Layout>
        <Wrapper variant={"md"}>
          <ContactForm />
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Contact);
