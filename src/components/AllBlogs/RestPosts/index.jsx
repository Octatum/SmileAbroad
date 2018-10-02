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
  margin: 1em 10px;

  ${device.tablet} {
    width: 40%;
    max-width: 40%;
  }
  ${device.mobile} {
    width: 100%;
    max-width: 100%;
  }
`;

const AllPosts = props => {
  const Posts = props.posts.map((data, index) => {
    return <Post postData={data} key={index} />;
  });

  return <Container className={props.className}>{Posts}</Container>;
};

export default AllPosts;
