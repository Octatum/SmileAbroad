import React from 'react';
import styled from 'styled-components';

import { device } from './../../../utils/device';

import background from './../assets/background.jpg';
import GetStartedButton from './../../GetStarted/Button';

const Cont = styled.div`
  width: 100%;
  position: relative;
  padding: 5em;

  border-bottom: 2em solid ${props => props.theme.color.lightBlue};

  p,
  span,
  a {
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
    text-align: center;
  }

  ::before {
    content: '';
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
    background-color: #23c5d9;
  }
`;

const MessageContainer = styled.div`
  position: relative;
  top: 10%;
  left: 40%;
  max-width: 55%;
  margin: 2.5em 0;

  font-size: calc(0.75rem + 0.75vw);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    margin-bottom: 1em;
  }

  ${device.tablet} {
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;

const Title = styled.p`
  font-size: 2em;
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

  ${device.tablet} {
    width: 100%;
  }
`;
const BoldText = Message.withComponent('span').extend`
  font-weight: bold;
`;

const GetStarted = styled(GetStartedButton)`
  font-size: 1em;
  div {
    border-radius: 10px;
    padding: 0.25em 0.75em;
    &:hover {
      background: none;
    }
  }
`;

const Welcome = props => (
  <Cont className={props.className}>
    <MessageContainer>
      <Title>
        Welcome <TitleBlue>Neighbor</TitleBlue>{' '}
      </Title>
      <Message>
        At <BoldText>NeighborHealth</BoldText> we help you find the ideal Dental
        Health Specialist Treatment. We facilitate the process of your
        experience abroad by creating a personalized itinerary and establishing
        a connection with a pre-screened practitioner.
      </Message>
      <GetStarted />
    </MessageContainer>
  </Cont>
);

export default Welcome;
