import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Welcome from './../components/AboutUs/Welcome';
import WhatWeDo from './../components/AboutUs/WhatWeDo';
import Connection from './../components/AboutUs/Connection';
import Journey from './../components/AboutUs/Journey';
import Pricing from './../components/AboutUs/Pricing';

const Container = styled.div`
  width: 100%;
`;


const AboutUsPage = () => (
  <Container>
    <Helmet title="About Us" />
    <Welcome />
    <WhatWeDo />
    <Connection />
    <Pricing />
    <Journey />
  </Container>
)


export default AboutUsPage;