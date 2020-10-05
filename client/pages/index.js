import React from 'react'
import Header from "@components/Header";
import LayoutStack, { Line, Spacing } from '@components/Layout'
import { FlexWrapper, InputWrapper } from '@components/chakra'
import { SmallCard } from '@components/cards'
import { HeadingTwo, Paragraph } from '@components/Typography'


export default function Home() {
  return (
    <React.Fragment>

      <Header />
      <LayoutStack>
        <section>
          <Spacing />
          <HeadingTwo>Know your Statesman</HeadingTwo>
          <Paragraph><bold>400</bold> Publicly available Manifestos of your elected politicians and statesmen</Paragraph>
          <InputWrapper width="60%" placeholder="search" />
          <select placeholder="Country"><option>Ghana</option></select>
          <Spacing />
        </section>
        <Line />

        <section>
          <Spacing pt="0" />
          <HeadingTwo>Meet your Head of States</HeadingTwo>
          <FlexWrapper justify="space-between" flexWrap="wrap">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </FlexWrapper>
          <Spacing />

          <img /> {/* Component Cards to render Head of States Components */}
        </section>
        <Line />


        <section>
          <Spacing pt="0" />
          <HeadingTwo>Countries</HeadingTwo>
          <FlexWrapper justify="space-between" flexWrap="wrap">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </FlexWrapper>

          <img /> {/* Components to render Countries Flag */}
          <Spacing />
        </section>
        <Line />

        <section>
          <Spacing pt="0" />
          <HeadingTwo>Why Statesman</HeadingTwo>
          <Paragraph>Information in a democratic government should be open, inclusive and truthful </Paragraph>
          <Paragraph>Political Manifestos are the foundations of any political campaign
          , most political candidates use this to set out a vision for what results their period in office will yield
          While most manifestos for smaller candidates stay internal, some are heavily distributed for top states positions
            Here are statesman, we want to maintain a publicly aggregated API of <strong>Publicly Elected Officials</strong>
            Their History, Backgrounds and Origins, years spent in service and achievements as they correlate to their Manifesto
            It's safe to say that we want to keep them accountable to the <strong>KPIs</strong> They've set for themselves before
            being elected into Office. <br />
            Contributing to this archive is easy if you have a Github account, Our goal is that the API grows to be a verifiable data source
            for future references, predictions, data scientists, educators etc who would find these aggregated data to be useful.
        </Paragraph>
          <Spacing />
        </section>



      </LayoutStack>
    </React.Fragment>
  );
}
