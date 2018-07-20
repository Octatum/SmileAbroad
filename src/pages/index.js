import React from 'react'
import styled from 'styled-components';

import Presentation from './../components/Presentation';
import OurServices from './Home/OurServices';
import AddedValue from './Home/AddedValue';

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
    <OurServices />
    { /* 
    <Separator />
    <FeaturedBlog> <p> Featured Blog </p> </FeaturedBlog>
    */}
    <Separator />
    <AddedValue />
  </div>
)

export default IndexPage
