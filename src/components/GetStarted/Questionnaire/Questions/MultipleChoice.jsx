import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {device} from '../../../../utils/device';

const ContainerForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

const Title = styled.p`
  font-size: 1.25em;
  margin-bottom: 20px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
  box-sizing: border-box;

  ${device.mobile} {
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  margin: 25px 0;
  display: flex;
  flex-direction: row;

  ${device.mobile} {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

const OtherLabel = Label.extend`
  margin-left: 0px;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: default;
`;

const Checkbox = styled.span`
  width: 0.75em;
  height: 0.75em;
  position: relative;
  background: white;
  padding: 0.3em;
  border-radius: 100%;
  transition: 150ms ease-in-out all;
  border: 2px solid ${props => props.theme.color.lightBlue};

  :before {
    content: "\u2713";
    font-weight: 700;
    width: 100%;
    height: 100%;
    position: absolute;
    color: ${props => props.theme.color.lightBlue};
    opacity: 0;
    transition: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
  }

  input[type='checkbox']:checked ~ &:before {
    opacity: 1;
  }

  
`;

/*      PLACE ON CHECKBOX FOR ON-FOCUS BACKGROUND CHANGE
input:focus ~ & {
    background: ${props => props.theme.color.lightBlue};

    :before {
      color: white;
    }
  }
*/

const OtherInput = styled.input`
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
  options,
  className
}) => {
  return (
    <ContainerForm className={className}>
      <Title> {questionText} </Title>
      {options.map(option => (
        <Label key={option}>
          <CheckboxInput 
            type="checkbox"
            name={`${name}-${option}`}
            onChange={onChange}
          />
          <Checkbox />
          &nbsp;
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

MultipleChoice.propTypes = {
  questionText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  includeOpenAnswer: PropTypes.bool
};

MultipleChoice.defaultProps = {
  includeOpenAnswer: false,
};

export default MultipleChoice;