import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Faq from './../components/Faq';

const Title = styled.p`
  font-size: calc(2rem + 0.75vw);
  font-weight: bold;
  margin: 1.5em auto;
  width: 70%;
`;
const BlueText = styled.span`
  color: ${props => props.theme.color.lightBlue};
`;

const FaqPage = ({data}) => (
  <div>
    <Helmet title="Frequently Asked Questions" />
    <Title><BlueText>NeighborHealth</BlueText> Frequently Asked Questions</Title>
    <Faq allQuestions={data.allMarkdownRemark.edges}/>
  </div>
)

export default FaqPage;

export const pageQuery = graphql`
query GetQuestions {
  allMarkdownRemark(filter: {frontmatter: {layout: {eq: "faq"}}}) {
    edges{
      node{
        rawMarkdownBody
        frontmatter{
          title
          question
        }
      }
    }
  }
}`;