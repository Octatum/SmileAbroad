import React from 'react';
import styled from 'styled-components';

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Title = styled.p`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: sans-serif;
  padding: 10px;
  min-width: 100%;
  box-sizing: border-box;
`;


const Label = styled.label`
  font-size: 2rem;
  font-family: sans-serif;
  margin: 25px 0;
  display: flex;
  flex-direction: row;
`;

const InputRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: default;
`;

const RadioButton = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  display: inline-block;
  background: rgba(0, 198, 219, 0.3);
  margin-right: 20px;
  
  ${Label}:hover > &,
  ${InputRadio}:checked + & {
    background: rgba(0, 198, 219, 1);
  }
  
`;

const OtherInput = styled.input`
  font-size: 2rem;
  font-family: sans-serif;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  outline: none;
  width: 250px;
  margin-left: 10px;
`;

const Questioncontainer = styled.div`
  display: inline-block;
`;

let otherAnswer = '';

const MultipleChoice = (props) => {
  let answers = '';
  let other = '';
  answers = props.options.map(data =>
    <Label
      key={data}
      onClick={() => handleSelection(data)}>
      <InputRadio 
          type="radio" 
          name={props.stateKey}
          onClick={(event) => event.stopPropagation()} />
      <RadioButton />
      <Questioncontainer>{data}</Questioncontainer>
    </Label>
  );

  if (props.other) {
    other = (
      <Label
        onClick={() => handleSelection(otherAnswer)}>
        <InputRadio 
            type="radio" 
            name={props.stateKey}
            onClick={(event) => event.stopPropagation()} />
        <RadioButton />
        <Questioncontainer>
          Other:
          <OtherInput type="text" onChange={userResponse} />
        </Questioncontainer>
      </Label>
    );
  }

  function userResponse(event) {
    otherAnswer = event.target.value;
    props.handleChange(otherAnswer, props.stateKey);
  }

  function handleSelection(data) {
    props.handleChange(data, props.stateKey);

  }

  return (
    <ContainerForm className={props.className}>
      <Title> {props.question} </Title>
      {answers}
      {other}
    </ContainerForm>
  )
};

export default MultipleChoice;
