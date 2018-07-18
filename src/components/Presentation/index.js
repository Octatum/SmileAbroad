import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #00C6DB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenterCont = styled.div`
  position: relative;
`;

const Text = styled.p`
  color: white;
  font-size: 2.3rem;
  display: flex;
  font-family: sans-serif;
`;

const Title = Text.extend`
  font-size: 4rem;
  padding-left: 10px;
`;

const SlideFromLeft = keyframes`
  0% {
    left: -400%;
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Image = styled.img`
  position: relative;
  height: 150px;
  width: 100%;
  border: 1px solid black;

  left: 0;

  animation: 3s ease 0s 1 ${SlideFromLeft};
  transition: left 0s ease 2s; 
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