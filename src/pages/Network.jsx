import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Network from '../components/Network';

const Container = styled.div`
  width: 100%;
`;


const AboutUsPage = ({data}) => (
  <Container>
    <Helmet title="Our Network" />
    <Network allDoctors={data.allMarkdownRemark.edges} />
  </Container>
)


export default AboutUsPage;

export const pageQuery = graphql`
query GetDoctors {
  allMarkdownRemark(filter: {frontmatter: {layout: {eq: "doctor"}}}) {
    edges{
      node{
        frontmatter{
          imageURL
          name
          carrera
          title
        }
        fields {
          route
        }
      }
    }
  }
}`;