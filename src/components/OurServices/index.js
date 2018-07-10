import React from 'react';
import styled from 'styled-components';

import ServiceSlide from './ServicesSlide';
import Services from './Services';

const Container = styled.div`
  
`;

const SlideShow = styled.div`
  height: 100vh;
  text-align: center;
  display: grid;
  box-sizing: border-box;
  grid-template: 2fr 8fr 2fr / 5fr 4fr;
  grid-template-areas: 
    ". ."
    "Pres ."
    ". .";
  background: #eee;
`;

const Slider = styled(ServiceSlide)`
  grid-area: Pres;
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
