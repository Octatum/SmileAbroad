import React from 'react';
import styled from 'styled-components';

import Globe from './../assets/Globe.png';
import Plane2 from './../assets/Plane2.png';
import Pin from './../assets/Pin.png';
import Networking from './../assets/Networking.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding-bottom: 1.5em;

  font-size: calc(0.8rem + 0.5vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  color: black;

  background: ${props => props.theme.color.lightBlue};

`;

const TitleCont = styled.div`
  width: 100%;
  position: relative;

  ::before {
    content: "";
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
  font-size: calc(1.75em + 1vw);
  font-weight: bold;
  text-align: center;
  margin: 0.5em 0;
`;
const WhiteTitle = Title.withComponent('span').extend`
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

  & > * {
    margin: 0.5em 0;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: auto;
  height: 30%;
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
    content: "";
    position: absolute;
    background: white;
    height: 0.2em;
    width: 3em;
    left: calc(50% - 1.5em);
    bottom: 0;
    border-radius: 1em;
  }

  @media(max-width: 425px) {
    width: 70%;
  }
`;

const CardDescription = styled.p`
  font-size: 1em;
  text-align: center;
  width: 60%;
  padding: 0.5em 0;

  @media(max-width: 425px) {
    width: 70%;
  }
`;
const BoldText = CardDescription.withComponent('span').extend`
  font-size: 1em;
  font-weight: bold;
`;

const Journey = () => (
  <Container>
    <TitleCont>
      <Title>The NeighborHealth <WhiteTitle>Journey</WhiteTitle></Title>
    </TitleCont>

      <CardContainer>
        <CardImage src={Pin} />
        <CardTitle>Affordability for everyone</CardTitle>
        <CardDescription>
          <BoldText>NeighborHealth</BoldText> is funded by individuals who believe that 
          <BoldText> healthcare</BoldText> should be easy and affordable for everyone.
        </CardDescription>
      </CardContainer>
      
      <CardContainer>
        <CardImage src={Globe} />
        <CardTitle>World's largest startup accelerator</CardTitle>
        <CardDescription>
          <BoldText>NeighborHealth</BoldText> begins summer Bootcamp at Plug and
          Play SiliCon Valley.
        </CardDescription>
      </CardContainer>

      <CardContainer>
        <CardImage src={Networking} />
        <CardTitle>Great Networking</CardTitle>
        <CardDescription>
          <BoldText>NeighborHealth</BoldText> Develpos a pre-screened Healthcare
          network across Mexico.
        </CardDescription>
      </CardContainer>

      <CardContainer>
        <CardImage src={Plane2} />
        <CardTitle>Our Launch</CardTitle>
        <CardDescription>
          <BoldText>NeighborHealth</BoldText> is ready to launch.
        </CardDescription>
      </CardContainer>
  </Container>
);

export default Journey;