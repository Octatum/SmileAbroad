import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 3rem;
  font-family: sans-serif;
  padding: 10px;
`;

const Answer = styled.input`
  border: #00C6DB 2px solid;
  border-radius: 15px;
  min-width: 85%;
  max-width: 700px;
  padding: 10px;
  font-size: 2rem;

  &:focus{
    outline:none;
  }
`;

const OpenQuestion = (props) => (
  <div className={props.className} >
    <Title> {props.question} </Title>
    <Answer />
  </div>
);

export default OpenQuestion;