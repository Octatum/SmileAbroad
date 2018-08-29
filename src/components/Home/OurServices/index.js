import React from 'react';
import styled from 'styled-components';

import ServiceSlide from './ServicesSlide';
import Services from './Services';
import {device} from './../../../utils/device';

import background from './assets/background.jpg';

const SlideShow = styled.div`
  min-height: 100vh;
  text-align: center;
  display: grid;
  box-sizing: border-box;
  grid-template: 1fr 6fr 1fr / 5fr 4fr;
  position: relative;
  grid-template-areas: 
    ". ."
    "Pres ."
    ". .";

  ${device.tablet} {
    display: block;
    min-height: 0;
  }

  ::before, 
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ::before {
    z-index: -2;
    background-image: url(${background});
    background-size: 100% auto;
    background-color: #23C5D9;
  }

  ::after {
    z-index: -1;    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,0082e5+100 */
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(left, #ffffff 0%, rgba(0, 0, 0, 0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #ffffff 0%,rgba(0, 0, 0, 0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #ffffff 0%,rgba(0, 0, 0, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
`;

const Slider = styled(ServiceSlide)`
  grid-area: Pres;
`;

const OurServices = () => (
  <div>
    <SlideShow>
      <Slider />
    </SlideShow>
    <Services />
  </div>
);

export default OurServices;
