import React from 'react';
import styled from 'styled-components/macro';

import IndividualPost from './IndividualPost';
import { device } from './../../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    justify-content: initial;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;

    ${device.laptop} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${device.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${device.mobile} {
      grid-auto-rows: min-content;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Post = styled(IndividualPost)`
  max-width: 23%;
  min-width: 21%;
  box-sizing: border-box;
  flex: 1;
  margin-bottom: 3rem;

  ${device.laptop} {
    max-width: 30%;
    min-width: 27%;
  }

  ${device.tablet} {
    max-width: 45%;
    min-width: 40%;
  }

  ${device.mobile} {
    min-width: 90%;
    max-width: 100%;
  }

  @supports (display: grid) {
    min-width: unset;
    max-width: unset;
    margin-bottom: unset;
    justify-content: unset;
  }
`;

const AllPosts = props => {
  const Posts = props.posts.map((data, index) => {
    return <Post postData={data} key={index} />;
  });

  return <Container className={props.className}>{Posts}</Container>;
};

export default AllPosts;
