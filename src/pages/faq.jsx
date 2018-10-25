import React from 'react';
import styled from 'styled-components/macro';
import Helmet from 'react-helmet';

import Faq from './../components/Faq';

import { graphql } from 'gatsby';
import { device } from './../utils/device';
import AppLayout from '../components/AppLayout';

const Title = styled.p`
  font-size: calc(2rem + 0.75vw);
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.main};
  text-align: center;

  margin: 1.5em auto;
  width: 70%;

  ${device.tablet} {
    text-align: center;
  }
`;
const BlueText = styled.span`
  color: ${props => props.theme.color.lightBlue};
`;

const FaqComp = styled(Faq)`
  margin: 2em auto;
  width: 60%;

  ${device.mobile} {
    margin: 2em 0;
    width: 100%;
  }
`;

const FaqPage = ({ data }) => (
  <AppLayout>
    <div>
      <Helmet title="FAQ" />
      <Title>
        Neighbor
        <BlueText>Health</BlueText> Frequently Asked Questions
      </Title>
      <FaqComp allQuestions={data.allMarkdownRemark.edges} />
    </div>
  </AppLayout>
);

export default FaqPage;

export const pageQuery = graphql`
  query GetQuestions {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "faq" } } }
      sort: { fields: frontmatter___title }
    ) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            title
            question
          }
        }
      }
    }
  }
`;
