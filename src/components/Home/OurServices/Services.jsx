import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import { device } from './../../../utils/device';

import { svgs } from './Svgs';

const Container = styled(Slider)`
  margin: 50px 0;

  & div {
    outline: none;
  }
`;

const ServiceImgContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;

  svg {
    fill: ${props => props.theme.color.lightBlue};
    height: 4.5em;
  }
`;

const IndivService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.p`
  color: black;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(0.75rem + 1vw);
  font-size: 1.5em;
  font-weight: 600;
  margin: 20px;

  ${device.mobile} {
    font-size: 1rem;
    font-size: 1.15em;
    margin: 20px 0;
  }
`;

const Description = Title.extend`
  font-size: calc(0.75rem + 1vw);
  font-size: 1em;
  font-weight: 500;

  ${device.mobile} {
    font-size: 0.75rem;
    font-size: 0.9em;
  }
`;

const Div = styled.div`
  position: relative;
  height: 100%;
  font-size: calc(0.75rem + 0.4vw);
`;

const Services = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container {...Settings}>
      <Div>
        <ServiceImgContainer>{svgs.appointment}</ServiceImgContainer>
        <IndivService>
          <Title>Booking</Title>
          <Description>
            Setting up your appointment with a top-rated specialist has never
            been easier than through the NeighborHealth Certified Network
          </Description>
        </IndivService>
      </Div>
      <Div>
        <ServiceImgContainer>{svgs.luggage}</ServiceImgContainer>
        <IndivService>
          <Title>Transportation</Title>
          <Description>
            At no extra cost, we’ve got you covered throughout your stay
          </Description>
        </IndivService>
      </Div>
      <Div>
        <ServiceImgContainer>{svgs.luggage}</ServiceImgContainer>
        <IndivService>
          <Title>Accomodation</Title>
          <Description>
            Enjoy the full NeighborHealth experience – Stay with our partner
            hotels that ensure a safe and comfortable stay
          </Description>
        </IndivService>
      </Div>
      <Div>
        <ServiceImgContainer>{svgs.travel}</ServiceImgContainer>
        <IndivService>
          <Title>Tourism</Title>
          <Description>V.I.P Access to the city’s Best Attractions</Description>
        </IndivService>
      </Div>
    </Container>
  );
};

export default Services;
