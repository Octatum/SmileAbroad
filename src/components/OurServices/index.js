import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import ServiceSlide from './ServicesSlide';

const Container = styled.div`
  
`;

const SlideShow = styled.div`
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template: 1fr 3fr 1fr / 2fr 2fr;
  grid-template-areas: 
    ". ."
    "Pres ."
    ". .";
    padding: 50px;
`;

const Slider = styled(ServiceSlide)`
  grid-area: Pres;
  border: 1px solid black;
`;

const Services = styled.div`

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