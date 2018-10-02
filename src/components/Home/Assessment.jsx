import React from 'react';
import styled from 'styled-components';

import GetStartedButton from './../GetStarted/Button';

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.lightBlue};
  border: 1px solid ${props => props.theme.color.lightBlue};

  font-size: calc(1em + 0.5vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
`;

const GetStarted = styled(GetStartedButton)`
  display: inline-block;

  div {
    border-radius: 0.75em;
    padding: 0.25em 1.5em;
    background: none;

    border-color: white;
    border-width: 0.15em;
    color: black;

    &:hover {
      background: none;
      color: white;
      border-color: black;
      border-width: 0.15em;
    }
  }
`;

const DottedCont = styled.div`
  border: 3px dashed black;
  border-radius: 2em;
  padding: 2em;
  margin: 1em auto;

  width: 90%;
  min-height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > * {
    margin: 0.5em;
  }
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const Separator = styled.div`
  width: 2em;
  height: 5px;
  border-radius: 1em;
  background-color: white;
`;

const Text = styled.p`
  font-size: 1em;
  width: 40%;
`;

const Assessment = () => (
  <Container>
    <DottedCont>
      <Title>Ready.Set.Travel</Title>
      <Separator />
      <Text>
        Take the free online assessment to prepare your personalized plan and
        get started on your journey.
      </Text>
      <GetStarted />
    </DottedCont>
  </Container>
);

export default Assessment;
