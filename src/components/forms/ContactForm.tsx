import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useContactGabeMutation } from "src/generated/graphql";
import { InputField } from "../util/InputField";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const router = useRouter();
  const [{}, contactGabe] = useContactGabeMutation();

  return (
    <>
      <Formik
        initialValues={{ replyTo: "", subject: "", content: "" }}
        onSubmit={async (values) => {
          const result = await contactGabe({ ...values });
          if (result) {
            router.reload();
          }
        }}>
        {({ isSubmitting }) => (
          <Form>
            <InputField
              isrequired
              name="replyTo"
              placeholder="email"
              label="Your Email"
            />
            <InputField
              isrequired
              name="subject"
              placeholder="subject"
              label="Subject"
            />
            <Box mt={4}>
              <InputField
                textarea
                isrequired
                name="content"
                placeholder="message..."
                label="Message"
                autoCorrect=""
              />
            </Box>

            <Button
              mt={4}
              type="submit"
              loadingText="Sending"
              isLoading={isSubmitting}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
