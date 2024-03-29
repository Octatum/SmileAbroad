import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 1rem;
`;

const Author = styled.p``;

const PostLink = styled(Link)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Post = props => {
  return (
    <Container className={props.className}>
      <PostLink to={props.postData.fields.route} />
      <Thumbnail src={props.postData.frontmatter.thumbnail} />
      <div>
        <Title>{props.postData.frontmatter.title}</Title>
        <Author>By {props.postData.frontmatter.author}</Author>
      </div>
    </Container>
  );
};

export default Post;
