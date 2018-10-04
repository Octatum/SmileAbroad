import React from 'react';
import styled from 'styled-components';

import { device } from './../../../utils/device';

import GetStartedButton from './../../GetStarted/Button';
import Tooth from './assets/Tooth.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(1rem + 0.75vw);
  font-family: ${props => props.theme.fontFamily.main};
  position: relative;

  min-height: 75vh;

  > p {
    margin-bottom: 1em;
  }
  > div {
    margin-bottom: 1.5em;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ::after {
    z-index: -2;
    background-image: url(${Tooth});
    background-size: 100% auto;
    opacity: 0.15;
  }
`;

const Title = styled.p`
  font-size: 1.5em;
  color: black;
  font-weight: bold;
  text-align: center;
  span {
    color: black;
  }
`;
const CompTitle = Title.extend`
  text-decoration: underline ${props => props.theme.color.lightBlue};
`;

const Text = styled.p`
  font-size: 1em;
  color: black;
  width: 35%;
  text-align: center;

  ${device.tablet} {
    width: 80%;
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  border: 4px dashed black;
  border-radius: 3em;

  width: 90%;
  padding: 2em;

  ${device.tablet} {
    flex-direction: column;
  }
`;

const Button = styled(GetStartedButton)`
  position: absolute;
  bottom: -1em;

  div {
    border-radius: 0.75em;
    padding: 0.25em 1.5em;
    background: black;

    &:hover {
      background: white;
      color: black;
      border-color: black;
    }
  }
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75em;
  max-width: 20%;
  p {
    width: initial;
  }

  ${device.tablet} {
    max-width: initial;
  }
`;

const GiantText = styled.span`
  font-size: 5em;
  color: ${props => props.theme.color.lightBlue};
  font-weight: bold;
`;

const Pricing = ({className}) => (
  <Container className={className}>
    <span
      id="pricing"
      style={{ position: 'absolute', visibility: 'hidden', top: '-100px' }}
    />
    <CompTitle>Pricing</CompTitle>
    <Text>The payment is divided in two different sections:</Text>
    <Sections>
      <PaymentOptions>
        <Title>Deposit</Title>
        <Text>
          Part of the deposit is a security for the dentist to secure your place
          and appointment.
        </Text>
        <Text>the other part is to book your hotel and tourist activities</Text>
      </PaymentOptions>
      <GiantText>&amp;</GiantText>
      <PaymentOptions>
        <Title>Payment</Title>
        <Text>
          This final payment is the renaming amount and must be provided once
          you have arrived at the dental clinic.
        </Text>
      </PaymentOptions>
      <Button />
    </Sections>
  </Container>
);

export default Pricing;
