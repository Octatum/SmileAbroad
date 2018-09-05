import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Network from '../components/Network';

const Container = styled.div`
  width: 100%;
`;


const AboutUsPage = () => (
  <Container>
    <Helmet title="Our Network" />
    <Network />
  </Container>
)


export default AboutUsPage;