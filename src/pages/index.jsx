import React from 'react';
import styled from 'styled-components';

import OurServices from '../components/Home/OurServices';
import AddedValue from '../components/Home/AddedValue';
import FeaturedBlog from '../components/Home/FeaturedBlog';
import Assessment from './../components/Home/Assessment';
import AppLayout from '../components/AppLayout';

import { graphql } from 'gatsby';

const Separator = styled.hr`
  background: #00c6db;
  height: 10px;
  width: 100%;
  border: none;
`;

const FeaturedBlogComp = styled(FeaturedBlog)`
  margin: 1.5em 0;
`;

const IndexPage = props => (
  <AppLayout>
    <div>
      <OurServices />

      <Separator />
      <FeaturedBlogComp postData={props.data} />

      <Separator />
      <AddedValue />

      <Assessment />
    </div>
  </AppLayout>
);

export default IndexPage;

export const postQuery = graphql`
  query GetLatestPost {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
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
