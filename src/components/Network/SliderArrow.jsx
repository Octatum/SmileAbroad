import React from 'react';
import styled from 'styled-components/macro';

import { SVGs } from '../assets/SVG';

const Container = styled.div``;

function Arrow({ className, onClick }) {
  return (
    <Container className={className} onClick={onClick}>
      {SVGs.arrow}
    </Container>
  );
}

export default Arrow;
