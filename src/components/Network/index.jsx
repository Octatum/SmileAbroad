import React from 'react';
import styled from 'styled-components';
import {device} from './../../utils/device';
import slider from 'react-slick';

import Video from './Videos';
import Doctor from './Doctor';

const Container = styled.div`
  font-size: calc(0.5rem + 1vw);

  p {
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

const Title = styled.p`
  font-size: 1.75em;
  font-weight: bold;
  text-align: center;
  span {
    color: ${props => props.theme.color.lightBlue};
  }
`;

const Description = styled.p`
  margin: 10px auto;
  width: 50%;
  text-align: justify;
  text-align-last: center;

  ${device.tablet} {
    width: 75%;
  }
`;

const Separator = styled.div`
  width: 3em;
  height: 0.25em;
  margin: 2em auto;
  border-radius: 10px;
  background: ${props => props.theme.color.lightBlue};
`;

const DoctorsCont = styled.div`
  width: 85%;
  margin: 0 auto;

  border: 1px solid red;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IndivDoctor = styled(Doctor)`
  width: 30%;

  ${device.tablet} {
    width: 45%;
  }

  ${device.mobile} {
    width: 90%;
  }
`;

const VideoCont = styled(slider)`
  padding: 1.5em;
  margin-top: 2em;
  margin-bottom: 3em;
  background: ${props => props.theme.color.lightBlue};
  

  & div {
    outline: none;
  }
`;

const IndivVideo = styled(Video)`
  margin: auto;
  width: 70%;
  
`;

const Network = (props) => {
  const doctores = props.allDoctors.map((data, index) => {
    return (
      <IndivDoctor 
        key={index}
        imageURL={data.node.frontmatter.imageURL}
        name={data.node.frontmatter.name}
        carrera={data.node.frontmatter.carrera}
        docId={data.node.frontmatter.title} />
    )
  });

  const videos = props.allVideos.map((data, index) => {
    return (
      <IndivVideo
        key={index}
        title={data.node.frontmatter.title}
        video={data.node.frontmatter.video}
        description={data.node.frontmatter.description}
      />
    )
  })

const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  swipeToSlide: true,
  focusOnSelect: true,
  arrows: false
};

  return (
    <Container>
      <Title>Neighbor<span>Health</span> Network</Title>
      <Description>
        What is the NeighborHealth Certified Network?
      </Description>
      <Description>
        Simply put; personal peace of mind.
      </Description>
      <Description>
        NeighborHealth assures you that each of the specialists in the network meet stringent standards for quality
        of services backed by credentials, safety, customer satisfaction, and cleanliness.
        Thus ensuring that you will receive quality service from top-rated and highly skilled practitioners that are highly interested your satisfaction.
      </Description>
  
      <Separator />
  
      <Title>Our Team</Title>
      <DoctorsCont>
        {doctores}
      </DoctorsCont>

      <VideoCont {...Settings}>
        {videos}
      </VideoCont>
    </Container>
  )
}

export default Network;

