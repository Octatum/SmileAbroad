import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #00C6DB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  color: white;
  font-size: 2.3rem;
  display: flex;
  font-family: sans-serif;
`

const Title = Text.extend`
  font-size: 4rem;
  padding-left: 10px;
`

const Image = styled.img`

`

const Presentation = () => (
  <Container>
    <div>
      <Text> Welcome to </Text>
      <Title> NeighborHealth </Title>
    </div>
    <Image />
  </Container>
)

export default Presentation;