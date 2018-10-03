import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { device } from '../utils/device';

import { graphql } from 'gatsby';

import Newest from '../components/AllBlogs/Newest';
import Top from '../components/AllBlogs/Top';
import OtherPosts from '../components/AllBlogs/RestPosts';
import AppLayout from '../components/AppLayout';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;

  & > div {
    margin: 10px;
  }

  margin: 5em;

  ${device.tablet} {
    margin: 2em;
  }
`;

const NewestPost = styled(Newest)`
  width: 65%;
  order: 1;

  ${device.laptop} {
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
  order: 2;

  ${device.laptop} {
    width: 100%;
    order: 3;
  }
`;

const Posts = styled(OtherPosts)`
  order: 3;

  ${device.laptop} {
    order: 2;
  }
`;

const Blogs = props => {
  const { allMarkdownRemark: Remark } = props.data;

  let newestFive = [];
  let latest = null;
  let restData = [];

  // eslint-disable-next-line
  Remark.edges.map((data, index) => {
    if (index === 0) {
      latest = data.node;
    } else if (index >= 1 && index <= 5) {
      newestFive.push(data.node);
    } else {
      restData.push(data.node);
    }
  });

  return (
    <AppLayout>
      <Container>
        <Helmet title="Blogs" />
        <NewestPost firstPost={latest} />
        <TopPosts fivePosts={newestFive} />
        <Posts posts={restData} />
      </Container>
    </AppLayout>
  );
};

export default Blogs;

export const pageQuery = graphql`
  query GetBlogs {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date
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
