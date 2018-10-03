import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { device } from '../../utils/device';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.color.lightBlue};
  z-index: 10;
  top: 0;
`;

const Text = styled.p`
  color: white;
  font-size: calc(5vw + 1rem);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  text-align: center;

  ${device.laptop} {
    font-size: 5rem;
  }

  > strong {
    font-weight: 700;
  }
`;

const SlideFromLeft = keyframes`
  0% {
    transform: translateX(calc(-50vw - 7.5rem));
  }
  100% {
    transform: translateX(0);
  }
`;

/* CHANGE HEIGHT WHEN ADDING IMAGE  */
const Image = styled.img`
  position: relative;
  height: 10rem;
  width: 15rem;
  margin-top: 20px;
  left: 0;
  animation: 3s ease-in-out ${SlideFromLeft};
  background: grey;
`;

class Presentation extends Component {
  state = {
    open: 0,
  };

  render() {
    return this.state.open ? (
      <Container>
        <Text>
          Welcome to
          <br />
          <strong>NeighborHealth</strong>
        </Text>
        <Image />
      </Container>
    ) : null;
  }
}

export default Presentation;
