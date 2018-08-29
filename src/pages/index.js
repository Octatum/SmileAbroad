import React from 'react'
import styled from 'styled-components';

import Presentation from './../components/Presentation';
import OurServices from './../components/Home/OurServices';
import AddedValue from './../components/Home/AddedValue';
import FeaturedBlog from './../components/Home/FeaturedBlog';


const Separator = styled.hr`
  background: #00C6DB;
  height: 10px;
  width: 100%;
  border: none;
`;

const IndexPage = (props) => (
  <div>
    <Presentation />
    <OurServices />

    <Separator />
    <FeaturedBlog postData={props.data} />

    <Separator />
    <AddedValue />
  </div>
)


export default IndexPage

export const postQuery = graphql`
  query GetLatestPost {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1) {
      edges{
        node{
          excerpt
          frontmatter{
            title
            thumbnail
            author
          }
          fields {
            route
          }
        }
      }
    }
  }
`;