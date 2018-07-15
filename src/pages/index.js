import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Presentation from './../components/Presentation';
import Navbar from './../components/Navbar';
import OurServices from './../components/OurServices';
import AddedValue from './../components/AddedValue';

const FeaturedBlog = styled.div`
  height: 100vh;
`;

const Separator = styled.hr`
  background: #00C6DB;
  height: 10px;
  width: 100%;
  border: none;
`;

const IndexPage = () => (
  <div>
    <Presentation />
    <Navbar />
    <OurServices />
    <Separator />
    <FeaturedBlog> <p> Featured Blog </p> </FeaturedBlog>
    <Separator />
    <AddedValue />
  </div>
)

export default IndexPage
