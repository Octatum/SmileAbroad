import React from 'react'
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

import Newest from './../components/AllBlogs/Newest';
import Top from './../components/AllBlogs/Top';
import OtherPosts from './../components/AllBlogs/RestPosts';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    margin: 10px;
  }

  margin: 20px;
`;

const TitleCont = styled.div`
  @media(max-width: 800px) {
    width: 100%;
    margin: 50px auto; 
  }
  width: 100%;
  order: 1;
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

const NewestPost = styled(Newest)`
  width: 65%;
  order: 2;

  @media(max-width: 768px) {
    width: 100%;
    p {
      max-width: 90%;
    }
    
    ::after {
      border-radius: 0;
    }
  }
`;

const TopPosts = styled(Top)`
  width: 30%;
  order: 3;

  @media(max-width: 768px) {
    width: 100%;
    order: 4;
    
  }
`;

const Posts = styled(OtherPosts)`
  order: 4;
  @media(max-width: 768px) {
    order: 3;
  }
`;

const Blogs = (props) => {
  const { allMarkdownRemark: Remark } = props.data;

  let newestFive = [];
  let latest = null;
  let restData = [];
  Remark.edges.map((data, index) => {
    if(index == 0) {
      latest = data.node;
    }
    else if(index >= 1 && index <= 5) {
      newestFive.push(data.node);
      restData.push(data.node);
    }
    else {
      restData.push(data.node);
    }
  });

  return (
    <Container>
      <Helmet title="Blogs" />
      <TitleCont>
        <Title>All the blogs</Title>
      </TitleCont>

      

      <NewestPost firstPost={latest} />
      <TopPosts fivePosts={newestFive} />
      <Posts posts={restData} />
    </Container>

  )
}


export default Blogs;


export const pageQuery = graphql`
query GetBlogs {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC} ) {
    totalCount
    edges{
      node{
        excerpt(pruneLength: 200)
        frontmatter{
          title
          date
          thumbnail
        }
        fields {
          route
        }
      }
    }
  }
}`;