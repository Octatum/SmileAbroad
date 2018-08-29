import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import IndividualPost from './IndividualPost';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Post = styled(IndividualPost)`
  width: 30%;
  flex: 1 0 auto;
  margin: 0 10px;
`;

const AllPosts = (props) => {
  const Posts = props.posts.map((data, index) => {
    return (
      <Post postData={data} key={index} />
    )
  })


  return (
    <Container className={props.className}>
      {Posts}
    </Container>
  )
}

export default AllPosts;