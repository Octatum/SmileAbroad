import React from 'react';
import styled from 'styled-components/macro';
import Helmet from 'react-helmet';

import { device } from '../utils/device';

import QuestionnaireIntro from '../components/GetStarted/QuestionnaireIntro';
import Questionnaire from '../components/GetStarted/Questionnaire';
import AppLayout from '../components/AppLayout';

const Title = styled.p`
  font-size: calc(1.5rem + 1vw);
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 100%;
  text-align: center;
  margin-top: 2em;
`;

const BlueTitle = styled.span`
  color: ${props => props.theme.color.lightBlue};
`;

const QuestionnaireComp = styled(Questionnaire)`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 10em;

  ${device.mobile} {
    width: 90%;
  }
`;

const QuestionnaireIntroComp = styled(QuestionnaireIntro)`
  margin: 50px 0;
`;

const GetStartedPage = () => (
  <AppLayout>
    <div>
      <Helmet title="Get Started" />
      <Title>
        Get <BlueTitle>Started</BlueTitle>
      </Title>
      <QuestionnaireIntroComp />
      <QuestionnaireComp />
    </div>
  </AppLayout>
);

export default GetStartedPage;
