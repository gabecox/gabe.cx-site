import {
  Box,
  Heading,
  Link,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { Layout } from "src/components/Layout";
import { Wrapper } from "src/components/util/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = ({}) => {
  const { hasCopied, onCopy } = useClipboard("gabe@gabe.cx");
  return (
    <>
      <Layout>
        <Wrapper bg={"inherit"}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading size={"lg"}>Hello!</Heading>
            <br />
            <Text>
              I'm Gabe, and I really enjoy making things. I've made furniture,
              several bicycles (electric and human powered), a skateboard and a
              sandstone wall.
            </Text>
            <br />
            <Text>
              You're most likely here because you're looking for someone to
              build software for or with you. I would love to help with that,
              I've been building applications for the past two years while
              studying an Engineering degree and have fallen in love with the
              process.
            </Text>
            <br />
            <Text>
              If you're looking for a developer, please take a look at the
              samples I have up and running and get in contact if you like what
              you see, or if you have any questions.
            </Text>
            <br />
            <Text>
              My email is {""}
              <Link onClick={onCopy}>
                <Tooltip label={hasCopied ? "Copied" : "Copy"}>
                  gabe@gabe.cx
                </Tooltip>
              </Link>
              .
            </Text>
          </Box>
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
