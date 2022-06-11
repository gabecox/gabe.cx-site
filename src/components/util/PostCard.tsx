import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Post } from "src/generated/graphql";
import { Wrapper } from "./Wrapper";

interface PostCardProps {
  data?: Partial<Post>;
}

export const PostCard: React.FC<PostCardProps> = ({
  data = {
    title: "No Posts!",
    body: "sorry about that",
  },
}) => {
  return (
    <Wrapper variant="md" shadow="2xl">
      <Box p={5} shadow="md" borderWidth="1px">
        <Flex>
          <Heading fontSize="xl">{data.title}</Heading>
          <Heading ml={"auto"} fontSize="sm"></Heading>
          <Heading ml={2} fontSize="sm">
            {data.createdAt
              ? new Date(parseInt(data.createdAt)).toLocaleDateString()
              : null}
          </Heading>
        </Flex>
        <Text mt={4}>{data.body}</Text>
      </Box>
    </Wrapper>
  );
};
