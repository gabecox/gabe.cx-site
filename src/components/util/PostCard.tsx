import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Post } from "src/generated/graphql";
import { Wrapper } from "./Wrapper";

interface PostCardProps {
  data?: Partial<Post>;
}

export const PostCard: React.FC<PostCardProps> = ({
  data = {
    title: "There are currently no posts!",
    body: "please check back later",
  },
}) => {
  return (
    <Wrapper variant="md" shadow="md">
      <Box p={5} borderWidth="1px">
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
