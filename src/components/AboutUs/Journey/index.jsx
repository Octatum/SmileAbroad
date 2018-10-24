import React from 'react';
import styled from 'styled-components/macro';

import { device } from './../../../utils/device';

import { svgs } from './svgs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding-bottom: 1.5em;

  font-size: calc(0.75rem + 0.75vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  color: black;

  background: ${props => props.theme.color.lightBlue};
`;

const TitleCont = styled.div`
  width: 100%;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 5em;
    height: 0.3em;
    background: white;

    bottom: 0;
    left: calc(50% - 2.5em);
    border-radius: 1em;
  }
`;

const Title = styled.p`
  font-size: 1.75em;
  font-weight: bold;
  text-align: center;
  margin: 0.5em 0;
`;
const WhiteTitle = styled(Title)`
  color: white;
  font-size: 1em;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 2em;
  margin-top: 2em;

  font-size: 0.85em;

  svg {
    height: 7.5em;
    display: block;
    fill: white;
  }

  & > * {
    margin: 0.5em 0;
  }

  ${device.tablet} {
    width: 100%;
  }
`;

const CardTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  width: 50%;
  padding: 0.5em 0;

  display: block;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    background: white;
    height: 0.2em;
    width: 3em;
    left: calc(50% - 1.5em);
    bottom: 0;
    border-radius: 1em;
  }

  ${device.mobile} {
    width: 70%;
  }
`;

const CardDescription = styled.p`
  font-size: 1em;
  text-align: center;
  width: 60%;
  padding: 0.5em 0;

  ${device.mobile} {
    width: 70%;
  }
`;
const BoldText = styled(CardDescription)`
  font-size: 1em;
  font-weight: bold;
`;

const Journey = () => (
  <Container>
    <TitleCont>
      <Title>
        The NeighborHealth <WhiteTitle as="span">Journey</WhiteTitle>
      </Title>
    </TitleCont>

    <CardContainer>
      {svgs.protection}
      <CardTitle>Healthcare for everyone</CardTitle>
      <CardDescription>
        <BoldText as="span">NeighborHealth</BoldText> is funded by individuals
        who believe that healthcare should be easily accessible and affordable
        for all.
      </CardDescription>
    </CardContainer>

    <CardContainer>
      {svgs.location}
      <CardTitle>Tried and Tested</CardTitle>
      <CardDescription>
        <BoldText as="span">NeighborHealth</BoldText> has undergone Plug and
        Play Bootcamp, the largest startup accelerator in the world.
      </CardDescription>
    </CardContainer>

    <CardContainer>
      {svgs.ekgMonitor}
      <CardTitle>the NeighborHealth Certified Network</CardTitle>
      <CardDescription>
        <BoldText as="span">NeighborHealth</BoldText> takes away the anxiety
        associated with trip planning. We have pre-screened specialists and
        provide you only with top-rated practicioners from across Mexico.
      </CardDescription>
    </CardContainer>

    <CardContainer>
      {svgs.crown}
      <CardTitle>Ready For You!</CardTitle>
      <CardDescription>
        We have sorted out the kinks, and are ready to welcome you on your
        NeighborHealth Experience to Mexico!
      </CardDescription>
    </CardContainer>
  </Container>
);

export default Journey;
