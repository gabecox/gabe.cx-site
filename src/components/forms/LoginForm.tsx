import { Form, Formik } from "formik";
import { toErrorMap } from "src/utils/toErrorMap";
import { useRouter } from "next/router";
import { useLoginMutation } from "src/generated/graphql";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { InputField } from "../util/InputField";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const [{}, login] = useLoginMutation();
  return (
    <Formik
      initialValues={{ usernameOrEmail: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await login({ options: values });
        if (response.data?.login.errors) {
          setErrors(toErrorMap(response.data.login.errors));
        } else if (response.data?.login.user) {
          router.asPath === "/login" ? router.push("/") : null;
        }
      }}>
      {({ isSubmitting }) => (
        <Form>
          <InputField
            name="usernameOrEmail"
            placeholder="username or email"
            label="Username or Email"
          />
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
            Login
          </Button>
          <Flex mt={2}>
            <NextLink href="/forgot-password">
              <Link ml="auto">Forgot Password?</Link>
            </NextLink>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
