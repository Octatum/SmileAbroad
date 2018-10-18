import React from 'react';
import styled from 'styled-components';
import { device } from './../../utils/device';
import slider from 'react-slick';

import Video from './Videos';
import Doctor from './Doctor';
import SliderArrow from './SliderArrow';

const Container = styled.div`
  font-size: calc(0.5rem + 0.75vw);

  p {
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  }
`;

const Title = styled.p`
  font-size: 1.5em;
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

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${device.mobile} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const IndivDoctor = styled(Doctor)`
  width: 30%;

  ${device.tablet} {
    width: 45%;
    margin: 1em auto;
  }

  ${device.mobile} {
    width: 90%;
  }
`;

const VideoCont = styled(slider)`
  margin-top: 2em;
  margin-bottom: 3em;
  background: ${props => props.theme.color.lightBlue};

  & div {
    outline: none;
  }

  & .slick-next,
  & .slick-prev {
    width: calc(15px + 2vw);
  }
  & .slick-track {
    margin: 0 auto;
  }
`;

const IndivVideo = styled(Video)`
  margin: auto;
  width: 75%;
`;

const NextArrow = styled(SliderArrow)`
  z-index: 2;
  &.slick-next {
    right: 1vw;
  }
  &.slick-next::before {
    content: '';
  }
  svg {
    fill: black;
    stroke: black;
  }
`;
const PrevArrow = NextArrow.extend`
  &.slick-prev {
    left: 1vw;
  }
  &.slick-prev::before {
    content: '';
  }
  svg {
    transform: rotate(180deg);
  }
`;

const Network = props => {
  const doctores = props.allDoctors.map((data, index) => {
    return (
      <IndivDoctor
        key={index}
        imageURL={data.node.frontmatter.image}
        name={data.node.frontmatter.name}
        carrera={data.node.frontmatter.specialty}
        docId={data.node.frontmatter.title}
      />
    );
  });

  const videos = props.allVideos.map((data, index) => {
    return (
      <IndivVideo
        key={index}
        title={data.node.frontmatter.title}
        video={data.node.frontmatter.video}
        description={data.node.frontmatter.description}
      />
    );
  });

  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <Title>
        Neighbor
        <span>Health</span> Network
      </Title>
      <Description>What is the NeighborHealth Certified Network?</Description>
      <Description>Simply put; personal peace of mind.</Description>
      <Description>
        NeighborHealth assures you that each of the specialists in the network
        meet stringent standards for quality of services backed by credentials,
        safety, customer satisfaction, and cleanliness. Thus ensuring that you
        will receive quality service from top-rated and highly skilled
        practitioners that are highly interested your satisfaction.
      </Description>

      <Separator />

      <Title>Our Team</Title>
      <DoctorsCont>{doctores}</DoctorsCont>

      <VideoCont {...Settings}>{videos}</VideoCont>
    </Container>
  );
};

export default Network;
