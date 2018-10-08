import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Welcome from './../components/AboutUs/Welcome';
import WhatWeDo from './../components/AboutUs/WhatWeDo';
import Connection from './../components/AboutUs/Connection';
import Journey from './../components/AboutUs/Journey';
import Pricing from './../components/AboutUs/Pricing';
import AppLayout from '../components/AppLayout';

const Container = styled.div`
  width: 100%;
`;

const WelcomeComp = styled(Welcome)``;
const OurValues = styled(WhatWeDo)`
  margin: 2em 0;
`;
const HowItWorks = styled(Connection)`
  margin: 3em 0 2em 0;
`;
const PricingComp = styled(Pricing)`
  margin: 2em 0em;
`;
const JourneyComp = styled(Journey)``;

const AboutUsPage = () => (
  <AppLayout>
    <Container>
      <Helmet title="About Us" />
      <WelcomeComp />
      <OurValues />
      <HowItWorks />
      <PricingComp />
      <JourneyComp />
    </Container>
  </AppLayout>
);

export default AboutUsPage;
