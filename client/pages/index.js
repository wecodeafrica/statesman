import { FlexWrapper } from '@components/chakra'
import Header from "@components/Header";

export default function Home() {
  return (
    <FlexWrapper align="center" justify="center">
      <Header />
      {/* <Heading as="h1">Hi, Stateman Client</Heading> */}
    </FlexWrapper>
  );
}
