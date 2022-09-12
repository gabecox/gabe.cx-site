import { Box, Link, Text, Tooltip, useClipboard } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { Layout } from "src/components/Layout";
import { Wrapper } from "src/components/util/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = ({}) => {
  const { hasCopied, onCopy } = useClipboard("gabe@gabe.cx");
  return (
    <>
      <Layout>
        <Wrapper>
          <Box p={5} borderWidth="2px">
            <Text>Welcome! Please take a look around.</Text>
            <br />
            <Text>
              If you would like to reach me, you can send an email to {""}
              <Link onClick={onCopy}>
                <Tooltip label={hasCopied ? "Copied" : "Copy"}>
                  gabe@gabe.cx
                </Tooltip>
              </Link>
              , or fill out the contact form.
            </Text>
          </Box>
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
