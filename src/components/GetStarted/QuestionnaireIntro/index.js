import React from 'react';
import styled from 'styled-components';
import { device } from './../../../utils/device';

import patient from './assets/patient.jpg';

const Container = styled.div`
  margin: 50px 0;
  font-size: calc(0.75rem + 0.75vw);
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 50px 0 50px 20px;

  & div {
    margin-left: 30px;
  }

  ${device.mobile} {
    flex-direction: column;
    margin: 15px 0;

    & div {
      margin: 15px 0;
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5vw;

  width: 100%;

  ${device.mobile} {
    order: 2;
    padding: 0;
    width: 75%;
    margin-bottom: 0 !important;
  }
`;

const Divisor = styled.div`
  border-radius: 250px;
  width: 15px;
  height: 150px;
  margin: auto;
  background: ${props => props.theme.color.lightBlue};

  ${device.mobile} {
    width: 30%;
    height: 5px;
    order: 3;
  }
`;

const ImageCont = styled.div`
  width: 100%;
  overflow: hidden;

  ${device.mobile} {
    order: 1;
  }
`;

const IMG = styled.img`
  width: 100%;
`;

const Text = styled.p`
  text-align: right;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  margin-bottom: 0.75em;

  ${device.mobile} {
    text-align: center;
  }
`;
const BlueText = Text.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const Desc = Text.extend`
  text-align: center;
  margin: auto;
  width: 70%;

  ${device.mobile} {
    width: 85%;
  }
`;

const QuestionnaireIntro = () => (
  <Container>
    <IntroContainer>
      <Intro>
        <Text>
          Filling out the following questionnaire will help us prepare your free
          quote.
        </Text>
        <Text>
          Upon completion, please expect a NeighborHealth team member to contact
          you in less than 24 hours with your personalized plan.
        </Text>
        <Text>
          In the plan, you will find: dentist profiles, accommodation choices,
          and tourist recommendations based on your responses.
        </Text>
      </Intro>
      <Divisor />
      <ImageCont>
        {' '}
        <IMG src={patient} />{' '}
      </ImageCont>
    </IntroContainer>
    <Desc>
      This is the NeighborHealth Advantage. We are excited to Welcome you to
      Mexico! Find out how much you can save on your dental treatment.
    </Desc>
  </Container>
);

export default QuestionnaireIntro;
