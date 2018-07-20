import React from 'react';
import styled, { keyframes } from 'styled-components';

/*
font-size: calc([minimum size] + 
          ([maximum size] - [minimum size]) * 
          ((100vw - [minimum viewport width]) / 
          ([maximum viewport width] - 
          [minimum viewport width])));
*/


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.color.lightBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenterCont = styled.div`
  position: relative;
  max-width: 100%;
`;

const Text = styled.p`
  color: white;
  font-size: calc(5vw + 1rem);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  @media(min-width: 1300px) {
    font-size: 5rem;
  }
`;

const Title = Text.extend`
  padding-left: 2vw;
  font-weight: bold;
`;

const SlideFromLeft = keyframes`
  0% {
    left: -400%;
  }
  100% {
    transform: translate(0, 0);
  }
`;

/* CHANGE HEIGHT WHEN ADDING IMAGE  */
const Image = styled.img`
  position: relative;
  
  height: 150px; 
  width: 100%;

  margin-top: 20px;
  left: 0;

  animation: 3s ease 0s 1 ${SlideFromLeft};
  

  background: grey;
`;

const Presentation = () => (
  <Container>
    <CenterCont>
      <Text> Welcome to </Text>
      <Title> NeighborHealth </Title>
      <Image/>
    </CenterCont>
  </Container>
)

export default Presentation;