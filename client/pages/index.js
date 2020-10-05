import React from 'react'
import Header from "@components/Header";
import { FlexWrapper } from '@components/chakra'
import LayoutStack from '@components/Layout'


export default function Home() {
  return (
    <React.Fragment>

      <Header />
      <LayoutStack>
        <FlexWrapper flexDirection="column" align="flex-start" justify="center">
          <section>
            <h1>Know your Statesman</h1>
            <p><span>400</span> Publicly available Manifestos of your elected politicians and statesmen</p>
            <input placeholder="search" />
            <select placeholder="Country"><option>Ghana</option></select>
          </section>

          <section>
            <h1>Meet your Head of States</h1>
            <img /> {/* Component Cards to render Head of States */}
          </section>

          <section>
            <h1>Countries</h1>
            <img /> {/* Components to render Countries Flag */}
          </section>
          <section>
            <h1>Why Stateman</h1>
            <p>Information in a democratic government should be open, inclusive and truthful </p>
            <p>Political Manifestos are the foundations of any political campaign
            , most political candidates use this to set out a vision for what results their period in office will yield
            While most manifestos for smaller candidates stay internal, some are heavily distributed for top states positions
            Here are statesman, we want to maintain a publicly aggregated API of <strong>Publicly Elected Officials</strong>
            Their History, Backgrounds and Origins, years spent in service and achievements as they correlate to their Manifesto
            It's safe to say that we want to keep them accountable to the <strong>KPIs</strong> They've set for themselves before
            being elected into Office. <br />
            Contributing to this archive is easy if you have a Github account, Our goal is that the API grows to be a verifiable data source
            for future references, predictions, data scientists, educators etc who would find these aggregated data to be useful.
</p>
          </section>



        </FlexWrapper>
      </LayoutStack>
    </React.Fragment>
  );
}
