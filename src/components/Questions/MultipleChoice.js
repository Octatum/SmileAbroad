import React from 'react';
import styled from 'styled-components';

/*
  TODO :: ON CLICK OR SELECTION OF OTHER INPUT DESELECT PREVIOUS INPUTS
*/

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Title = styled.p`
  font-size: calc(1rem + 1vw);
  margin-bottom: 20px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
  box-sizing: border-box;

  @media(max-width: 520px) {
    padding: 0;
    margin-bottom: 10px;
  }
`;


const Label = styled.label`
  font-size: calc(0.85rem + 1vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  margin: 25px 0;
  display: flex;
  flex-direction: row;

  @media(max-width: 520px) {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

const OtherLabel = Label.extend`
  margin-left: 0px;
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
  margin-right: 1.2em;
  
  ${Label}:hover > &,
  ${InputRadio}:checked + & {
    background: rgba(0, 198, 219, 1);
  }
  
`;

const OtherInput = styled.input`
  font-size: calc(0.85rem + 1vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  outline: none;
  margin-left: 10px;

  width: 60%;
`;


let otherAnswer = '';

const MultipleChoice = (props) => {
  let answers = '';
  answers = props.options.map((data, index) =>
    <Label
      key={data} >
      <InputRadio
        type={props.handleMany ? "checkbox" : "radio"}
        name={props.stateKey}
        onClick={(event) => handleSelection(event, data, index)} />
      <RadioButton />
      {data}  
    </Label>
  );

  let other = '';
  if (props.other) {
    other = (
      <OtherLabel>
        <InputRadio
          type={props.handleMany ? "checkbox" : "radio"}
          name={props.stateKey}
          onClick={(event) => handleSelection(event, otherAnswer, props.options.length)} />
          <RadioButton/>
          Other:
          <OtherInput
            type="text"
            onChange={userResponse}
            onClick={(event) => handleSelection(event, otherAnswer, props.options.length)} />
      </OtherLabel>
    );
  };


  function userResponse(event) {
    otherAnswer = event.target.value;
    if (props.handleMany) {
      props.handleChange(otherAnswer, props.stateKey, props.options.length);
    }
    else {
      props.handleChange(otherAnswer, props.stateKey);
    }

  }

  function handleSelection(event, data, index) {
    if (props.handleMany) {
      let checked = event.target.checked == true ? true : false;
      if (checked && index == props.options.length) {
        checked = otherAnswer;
      }
      props.handleChange(checked, props.stateKey, index)
    }
    else {
      props.handleChange(data, props.stateKey);
    }
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
