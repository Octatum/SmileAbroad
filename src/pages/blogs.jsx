import React from 'react'
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

const Container = styled.div`
`;

const TitleCont = styled.div`
  @media(max-width: 800px) {
    width: 90%;
    margin: 50px auto; 
  }
`;

const Title = styled.p`
  font-size: calc(2rem + 1vw);
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 80%;
  text-align: center;
  margin: auto;
`;

const Blogs = (props) => {
  const { allMarkdownRemark: Remark } = props.data;
  console.log(Remark.edges);

  const titles = Remark.edges.map(data => {
    return (
      <div>
        <p>{data.node.frontmatter.title}</p>
        <Link to={data.node.frontmatter.path}>{data.node.frontmatter.path}</Link>
      </div>
    )
  });

  return (
    <Container>
      <Helmet title="Blogs" />
      <TitleCont>
        <Title>All the blogs</Title>
      </TitleCont>

      {titles}

    </Container>

  )
}


export default Blogs;


export const pageQuery = graphql`
query GetBlogs {
    allMarkdownRemark {
      totalCount
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`;