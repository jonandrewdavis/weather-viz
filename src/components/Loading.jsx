import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => (
  <SimpleGrid columns={2} spacing={10} mt={10} p={12}>
    <Center>
      {" "}
      <Spinner
        size="xl"
        thickness="4px"
        emptyColor="gray.200"
        color="teal.500"
      ></Spinner>
    </Center>
    <Center>
      <Spinner
        size="xl"
        thickness="4px"
        emptyColor="gray.200"
        color="teal.500"
      ></Spinner>
    </Center>
  </SimpleGrid>
);

export default Loading;
