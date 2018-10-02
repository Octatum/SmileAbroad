import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import QuestionnaireIntro from '../components/GetStarted/QuestionnaireIntro';
import Questionnaire from '../components/GetStarted/Questionnaire';
import AppLayout from '../components/AppLayout';

const Title = styled.p`
  font-size: calc(1.5rem + 1vw);
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 100%;
  text-align: center;
  margin-top: 2em;
`;

const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const GetStartedPage = () => (
  <AppLayout>
    <div>
      <Helmet title="Get Started" />
      <Title>
        Get <BlueTitle>Started</BlueTitle>
      </Title>
      <QuestionnaireIntro />
      <Questionnaire />
    </div>
  </AppLayout>
);

export default GetStartedPage;
