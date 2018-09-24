import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {device} from '../../../../utils/device';

const Container = styled.label`
  margin: 20px 0;
  width: 100%;
`;

const Title = styled.p`
  font-size: 1.25em;
  margin-bottom: 0.5em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
  box-sizing: border-box;

  ${device.mobile} {
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Answer = styled.input`
  font-size: 1em;
  border: ${props => props.theme.color.lightBlue} 2px solid;
  border-radius: 15px;
  padding: 10px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  width: 100%;
  box-sizing: border-box;

  &:focus{
    outline:none;
  }

  &:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 198, 219, 0.25),
                -2px -2px 5px 1px rgba(0, 198, 219, 0.25);
  }

`;

const OpenQuestion = ({questionText, ...rest}) => {
  return (
  <Container>
    <Title> {questionText} </Title>
    <Answer 
      {...rest}
    />
  </Container>
  );
};

OpenQuestion.proptypes = {
  questionText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  type: PropTypes.string
};

OpenQuestion.defaultProps = {
  required: false,
  type: 'text'
};

export default OpenQuestion;
