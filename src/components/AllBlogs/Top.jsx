import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
`;

const Title = styled.p`
  color: white;
  background: ${props => props.theme.color.lightBlue};
  border-radius: 10px;
  font-size: 1.5em;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`;

const PostList = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    padding-left: calc(5px + 0.5vw + 1em);
    position: relative;
    margin: 1em auto;
    width: 90%;

    :before {
      content: '';
      position: absolute;
      top: calc(50% - 2.5px - 0.25vw);
      left: 3px;
      width: calc(5px + 0.5vw);
      height: calc(5px + 0.5vw);
      border-radius: 100%;
      background: black;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
`;

const TopStories = props => {
  const List = props.fivePosts.map((data, index) => {
    return (
      <span key={index}>
        <Link to={data.fields.route}>{data.frontmatter.title}</Link>
      </span>
    );
  });

  return (
    <Container className={props.className}>
      <Title>Top Stories</Title>
      <PostList>{List}</PostList>
    </Container>
  );
};

export default TopStories;
