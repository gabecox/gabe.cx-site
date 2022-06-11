import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "src/components/Layout";
import { InputField } from "src/components/util/InputField";
import { Wrapper } from "src/components/util/Wrapper";
import { useForgotPasswordMutation } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";

interface ForgotPasswordProps {}

const PasswordReset: React.FC<ForgotPasswordProps> = ({}) => {
  const [{}, forgot] = useForgotPasswordMutation();
  return (
    <>
      <Layout>
        <Wrapper variant="md">
          <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values) => {
              await forgot(values);
              return;
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField name="email" placeholder="email" label="Email" />
                <Button
                  mt={4}
                  type="submit"
                  loadingText="Submitting"
                  isLoading={isSubmitting}
                  colorScheme="teal"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(PasswordReset);
