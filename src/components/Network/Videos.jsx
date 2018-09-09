import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  & > * {
    margin: 0.75em 0;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2.5em;
  color: white;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Description = styled.p`
  background-color: white;
  text-align: center;
  padding: 1em 1.5em;
  border-radius: 0.5em;
  width: 90%;
`;

const IndivVideo = ({
  title,
  video,
  description,
  className
}) => {
  return (
  <Container className={className}>
    <Title>{title}</Title>
    <Video 
      controls
      controlsList="nodownload">
      <source src={video} type="video/webm" />
      <source src={video} type="video/mp4" />
    </Video>
    <Description>{description}</Description>
  </Container>
  )
}

IndivVideo.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default IndivVideo;