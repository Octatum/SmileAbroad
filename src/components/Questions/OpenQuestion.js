import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const Answer = styled.input`
  border: ${props => props.theme.color.lightBlue} 2px solid;
  border-radius: 15px;
  width: 70%;
  max-width: 800px;
  padding: 10px;
  calc(0.85rem + 1vw);

  &:focus{
    outline:none;
  }

  &:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 198, 219, 0.25),
                -2px -2px 5px 1px rgba(0, 198, 219, 0.25);
  }
`;

const OpenQuestion = (props) => {
  function userResponse(event) {
    props.handleChange(event.target.value, props.stateKey);
  }

  return (
  <Container className={props.className} >
    <Title> {props.question} </Title>
    <Answer 
        type='text' 
        onChange={userResponse}/>
  </Container>
  );
};

export default OpenQuestion;
