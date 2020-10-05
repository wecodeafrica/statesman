import { Flex, Heading } from "@chakra-ui/core";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex align="center" justify="center">
      <Header />
      {/* <Heading as="h1">Hi, Stateman Client</Heading> */}
    </Flex>
  );
}
