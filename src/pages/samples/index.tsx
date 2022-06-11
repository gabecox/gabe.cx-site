import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import React from "react";
import { PortfolioCard } from "src/components/util/PortfolioCard";
import { Wrap } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import { useSamplesQuery } from "src/generated/graphql";
// import NextLink from "next/link";
import { Layout } from "src/components/Layout";
import { Wrapper } from "src/components/util/Wrapper";

const SamplesIndex = () => {
  const [{ data }] = useSamplesQuery();
  return (
    <>
      <Layout>
        <br />
        <Wrapper bg={"inherit"}>
          {/* <NextLink href={"samples/new-sample"}>
            <Button variant={"link"}>New Sample</Button>
          </NextLink> */}
          <Wrap spacing="30px" justify="space-between">
            {!data || data?.samples.length === 0 ? (
              <div key={"0"}>no data</div>
            ) : (
              data.samples.map((p) => (
                <>
                  <PortfolioCard key={p.id} data={p} />
                </>
              ))
            )}
          </Wrap>
        </Wrapper>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(SamplesIndex);
