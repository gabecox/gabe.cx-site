import {
  Box,
  Heading,
  Text,
  Link,
  Divider,
  HTMLChakraProps,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { Sample } from "src/generated/graphql";
import { Wrapper } from "./Wrapper";

interface PortfolioCardProps {
  data: Sample;
}

const SampleInfo: React.FC<PortfolioCardProps> = ({ data }) => {
  const desc = data.desc.split("\n");
  return (
    <Box p={5}>
      <NextLink href={data?.url} passHref>
        <Link>
          <Heading fontSize="xl">{data.title}</Heading>
          {desc.map((p) => (
            <Text mt={4}>{p}</Text>
          ))}
        </Link>
      </NextLink>
    </Box>
  );
};

const SampleImage: React.FC<PortfolioCardProps> = ({ data }) => {
  const img = require(`/public/images/${data.imagesrc}`);
  return (
    <Image
      src={img}
      layout={"responsive"}
      width={"350px"}
      height={"280px"}
      quality={100}
    />
  );
};

export const PortfolioCard: React.FC<
  PortfolioCardProps & HTMLChakraProps<any>
> = ({ data, ...props }) => {
  return (
    <>
      <Wrapper variant="sm" shadow="2xl" cursor={"pointer"} {...props}>
        <SampleInfo data={data} />
        <Divider orientation="horizontal" />
        <SampleImage data={data} />
      </Wrapper>
    </>
  );
};
