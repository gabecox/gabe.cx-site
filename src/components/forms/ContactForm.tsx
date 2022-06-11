import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../util/InputField";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ email: "", subject: "", body: "" }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField name="email" placeholder="email" label="Your Email" />
          <InputField
            aria-required
            name="subject"
            placeholder="subject"
            label="Subject"
          />
          <Box mt={4}>
            <InputField
              textarea
              name="body"
              placeholder="content..."
              label="Content"
              autoCorrect=""
            />
          </Box>
          <Button
            mt={4}
            type="submit"
            loadingText="Sending"
            isLoading={isSubmitting}
            colorScheme="teal"
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};
