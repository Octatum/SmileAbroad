import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import background from './../assets/background.jpg';

const Cont = styled.div`
  width: 100%;
  position: relative;
  padding: 2em;

  p, span, a {
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
    text-align: center;
  }

  > div {
    font-size: calc(1rem + 1vw);
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ::before {
    z-index: -2;
    background-image: url(${background});
    background-size: 100% auto;
    background-color: #23C5D9;
  }
`;

const MessageContainer = styled.div`
  position: relative;
  top: 10%;
  left: 40%;
  max-width: 55%;
  margin: 2.5em 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    margin-bottom: 1em;
  }

  @media(max-width: 920px) {
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;

const Title = styled.p`
  font-size: 1.8em;
  font-weight: bold;
`;
const TitleBlue = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
  font-size: 1em;
`;

const Message = styled.p`
  color: #000;
  width: 70%;
  margin-bottom: 2em;

   @media(max-width: 920px) {
    width: 100%
  }
`;
const BoldText = Message.withComponent('span').extend`
  font-weight: bold;
`;

const GetStartedButton = styled(Link)`
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  background: black;
  border-radius: 10px;
  padding: 10px 0.5em;

  text-decoration: none;
`;

const Welcome = () => (
  <Cont>
    <MessageContainer>
      <Title>Welcome <TitleBlue>Neighbor</TitleBlue> </Title>
      <Message>
        At <BoldText>NeighborHealth</BoldText> we help you find the ideal Dental Health 
        Specialist Treatment. We facilitate the process of your experience
        abroad by creating a personalized itinerary and establishing a connection 
        with a pre-screened practitioner.
      </Message>
      <GetStartedButton to="/GetStarted">Get Started</GetStartedButton>
    </MessageContainer>
  </Cont>
);

export default Welcome;