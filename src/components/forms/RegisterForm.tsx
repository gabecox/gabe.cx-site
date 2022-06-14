import { Form, Formik } from "formik";
import { toErrorMap } from "src/utils/toErrorMap";
import { useRouter } from "next/router";
import { useRegisterMutation } from "src/generated/graphql";
import { Box, Button } from "@chakra-ui/react";
import { InputField } from "../util/InputField";

interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const router = useRouter();
  const [{}, register] = useRegisterMutation();
  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await register({ options: values });
        if (response.data?.register.errors) {
          setErrors(toErrorMap(response.data.register.errors));
        } else if (response.data?.register.user) {
          // register success
          router.asPath === "/register" ? router.push("/") : null;
        }
      }}>
      {({ isSubmitting }) => (
        <Form>
          <InputField name="username" placeholder="username" label="Username" />
          <Box mt={4}>
            <InputField name="email" placeholder="email" label="Email" />
          </Box>
          <Box mt={4}>
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
          </Box>
          <Button
            mt={4}
            type="submit"
            loadingText="Submitting"
            isLoading={isSubmitting}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};
