import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 3rem;
  font-family: sans-serif;
  padding: 10px;
`;


const Label = styled.label`
  font-size: 2rem;
  font-family: sans-serif;
`;

const InputRadio = styled.input`
  
`;

const InputText = styled.input`
  font-size: 2rem;
  font-family: sans-serif;
`;

const MultipleChoice = (props) => {
  let questions = '';
  let other = '';
  questions = props.options.map(data =>
    <Label key={data}>
      <InputRadio type="radio" />
      {data}
    </Label>
  );
  if(props.other) {
    other = (
      <Label>
        <InputRadio type="radio" />
        Other:
        <InputText type="text" />
      </Label>
    );
  }
  return (
    <Container className={props.className}>
      <Title> {props.question} </Title>
      {questions}
      {other}
    </Container>
  )
};

export default MultipleChoice;
