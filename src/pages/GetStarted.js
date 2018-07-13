import React from 'react';
import styled from 'styled-components';

import Navbar from './../components/Navbar';
import QuestionnaireIntro from './../components/QuestionnaireIntro';
import Questionnaire from './../components/Questionnaire';

const Title = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: 600;
  font-family: sans-serif;
  width: 100%;
  text-align: center;
  margin-top: 200px;
`;
const BlueTitle = Title.withComponent('span').extend`
  color: #00C6DB;
`;




const GetStartedPage = () => (
  <div>
    <Navbar />
    <Title>
      Get <BlueTitle>Started</BlueTitle>
    </Title>
    <QuestionnaireIntro />
    <Questionnaire />
  </div>
);

export default GetStartedPage;