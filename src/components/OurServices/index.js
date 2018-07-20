import React from 'react';
import styled from 'styled-components';

import ServiceSlide from './ServicesSlide';
import Services from './Services';

const Container = styled.div`
  
`;

const SlideShow = styled.div`
  min-height: 100vh;
  text-align: center;
  display: grid;
  box-sizing: border-box;
  grid-template: 1fr 6fr 1fr / 5fr 4fr;
  grid-template-areas: 
    ". ."
    "Pres ."
    ". .";

  background: #eee;

  @media(max-width: 950px) {
    display: block;
    min-height: 0;
  }
`;

const Slider = styled(ServiceSlide)`
  grid-area: Pres;

  min-width: 600px;
  
  background-color: #ccc;
`;

const OurServices = () => (
  <Container>
    <SlideShow>
      <Slider />
    </SlideShow>
    <Services />
  </Container>
);

export default OurServices;
