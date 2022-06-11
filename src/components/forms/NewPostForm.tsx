import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useCreatePostMutation } from "src/generated/graphql";
import { InputField } from "../util/InputField";

interface NewPostFormProps {}

export const NewPostForm: React.FC<NewPostFormProps> = ({}) => {
  const router = useRouter();
  const [{}, createPost] = useCreatePostMutation();
  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      onSubmit={async (values) => {
        const { error } = await createPost({ options: values });
        if (!error) {
          router.push("/posts");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField
            aria-required
            name="title"
            placeholder="title"
            label="Title"
          />
          <Box mt={4}>
            <InputField
              required
              textarea
              name="body"
              placeholder="content..."
              label="Content"
            />
          </Box>
          <Button
            mt={4}
            type="submit"
            loadingText="Posting"
            isLoading={isSubmitting}
            colorScheme="teal"
          >
            Post
          </Button>
        </Form>
      )}
    </Formik>
  );
};
