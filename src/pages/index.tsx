import { Heading, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { Layout } from "src/components/Layout";
import { Wrapper } from "src/components/util/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = ({}) => {
  return (
    <>
      <Layout>
        <Wrapper bg={"inherit"}>
          <Heading>Welcome</Heading>
          <Text>I'm gabe</Text>
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
