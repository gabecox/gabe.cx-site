import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useCreateSampleMutation } from "src/generated/graphql";
import { InputField } from "../util/InputField";

interface NewSampleFormProps {}

export const NewSampleForm: React.FC<NewSampleFormProps> = ({}) => {
  const router = useRouter();
  const [{}, createSample] = useCreateSampleMutation();
  return (
    <Formik
      initialValues={{ title: "", desc: "", imagesrc: "", url: "" }}
      onSubmit={async (values) => {
        const { error } = await createSample({ options: values });
        if (!error) {
          router.push("/samples");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField
            aria-required
            name="title"
            placeholder="title"
            label="Title:"
          />
          <Box mt={4}>
            <InputField
              aria-required
              name="imagesrc"
              placeholder="imagesource"
              label="Image Source:"
            />
          </Box>
          <Box mt={4}>
            <InputField
              aria-required
              name="url"
              placeholder="url"
              label="Link to:"
            />
          </Box>
          <Box mt={4}>
            <InputField
              aria-required
              textarea
              name="desc"
              placeholder="description..."
              label="Description:"
            />
          </Box>
          <Button
            mt={4}
            type="submit"
            loadingText="Posting"
            isLoading={isSubmitting}
            colorScheme="teal"
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};
