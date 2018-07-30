import React from 'react';
import styled from 'styled-components';

const ContainerForm = styled.fieldset`
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

const Checkbox = styled.span`
  width: 1em;
  height: 1em;
  position: relative;
  background: ${props => props.theme.color.lightBlue};
  padding: 0.2em;
  margin-right: 0.5em;
  border-radius: 100%;

  :before {
    content: "\u2713";
    font-weight: 700;
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    opacity: 0;
    transition: 100ms ease-in-out opacity;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
  }

  input[type='checkbox']:checked ~ &:before {
    opacity: 1;
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


const MultipleChoice = ({
  questionText, 
  includeOpenAnswer, 
  onChange,
  name,
  options
}) => {
  return (
    <ContainerForm>
      <Title> {questionText} </Title>
      {options.map(option => (
        <Label key={option}>
          <InputRadio 
            type="checkbox"
            name={`${name}-${option}`}
            onChange={onChange}
          />
          <Checkbox />
          {option}
        </Label>
      ))}
      {includeOpenAnswer && (
        <OtherLabel>
          Other:
          <OtherInput 
            questionText="other"
            onChange={onChange}
            name={`${name}-other`}
          />
        </OtherLabel>
      )}
    </ContainerForm>
  )
};


/*
MultipleChoice.proptypes = {
  questionText: PropTypes.string.required,
  onChange: PropTypes.func.required,
  name: PropTypes.string.required,
  options: PropTypes.array.required,
  required: PropTypes.bool,
  includeOpenAnswer: PropTypes.bool
};
*/

MultipleChoice.defaultProps = {
  required: false,
  includeOpenAnswer: false,
};


export default MultipleChoice;
