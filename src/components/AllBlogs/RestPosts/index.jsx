import React from 'react';
import styled from 'styled-components';

import IndividualPost from './IndividualPost';
import { device } from './../../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Post = styled(IndividualPost)`
  max-width: 30%;
  flex: 1 0 auto;
  margin: 0 10px;
  
  ${device.mobile} {
    width: 100%;
    max-width: 100%;
  }

  ${device.tablet} {
    width: 40%;
    max-width: 40%;
  }
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