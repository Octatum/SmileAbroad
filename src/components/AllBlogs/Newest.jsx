import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em;

  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  border-radius: 10px;

  min-height: 75vh;

  ::after {
    background-image: url(${props => props.image});
    background-position: center;

    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2em;
  padding-bottom: 1rem;
`;

const Excerpt = styled.p`
  word-wrap: break-word;
`;

const Author = styled.p`
  font-weight: bold;
  color: ${props => props.theme.color.lightBlue};
`;

const Image = styled.img`
  width: 100%;
`;

const PostLink = styled(Link)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Post = props => (
  <Container className={props.className}>
    <PostLink to={props.firstPost.fields.route} />
    <Title>{props.firstPost.frontmatter.title}</Title>
    <Image src={props.firstPost.frontmatter.thumbnail} />
    <Excerpt>{props.firstPost.excerpt}</Excerpt>
    <Author>
      <span style={{ color: 'black', fontWeight: 'initial' }}>By </span>
      {props.firstPost.frontmatter.author}
    </Author>
  </Container>
);

export default Post;
