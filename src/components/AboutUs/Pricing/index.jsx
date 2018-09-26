import React from 'react';
import styled from 'styled-components';

import { device } from './../../../utils/device';

import GetStartedButton from './../../GetStarted/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(0.75rem + 0.75vw);
  font-family: ${props => props.theme.fontFamily.main};

  padding: 1.5em 0;
  padding-bottom: 5em;

  background-color: ${props => props.theme.color.lightBlue};
  min-height: 75vh;
  > p {
    margin-bottom: 1em;
  }
  > div {
    margin-bottom: 1.5em;
  }
`;

const Title = styled.p`
  font-size: 1.5em;
  color: white;
  font-weight: bold; 
  span {
    color: black;
  }
`;

const Separator = styled.div`
  background: white;
  width: 3em;
  height: 5px;
  border-radius: 1em;
`;
const SeparatorThin = Separator.extend`
  widtH: 5em;
  height: 2px;
`;

const Text = styled.p`
  font-size: 1em;
  color: white;
  width: 35%;
  text-align: center; 

  ${device.tablet} {
    width: 80%;
  }
`;

const Button = styled(GetStartedButton)`
  div {
    border-radius: 0.5em;
    padding: 0.25em 1.5em;
    background: black;

    &:hover{
      background: ${props => props.theme.color.lightBlue};
      color: black;
      border-color: black;
    }
  }
`;

const Pricing = () => (
  <Container id="pricing">
    <Title>Pricing</Title>
    <Separator />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Text>
    <SeparatorThin />
    <Title>Pricing <span>One</span></Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Text>
    <Button/>
  </Container>
)

export default Pricing;