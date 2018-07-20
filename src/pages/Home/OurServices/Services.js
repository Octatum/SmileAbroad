import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Slider from 'react-slick';

import rightArrow from './../../../components/assets/rightArrow.svg';
import travel from './assets/travel.png';
import accomodation from './assets/accomodation.png';
import transport from './assets/transport.png';
import booking from './assets/booking.png';

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
`;

const ServiceImg = styled.img`
  position: relative;  
  height: 7rem;
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
  font-weight: 600;
  margin: 20px;

  @media(max-width: 500px) {
    font-size: 1rem;
    margin: 20px 0;
  }
`;

const Description = Title.extend`
  font-size: calc(0.75rem + 1vw);
  font-weight: 500;

  @media(max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const ArrowButton = styled(Link)`
  width: 20%;
  text-decoration: none;
  margin: auto;

  bottom: 0;
  left: 0;

  transition: transform 0.25s linear;
  :hover ${Arrow} {
    transform: scale(1.1) translate(10%);
  }
`;

const Arrow = styled.img`
  width: 3rem;
  margin: auto;

  @media(min-width: 540px) {
    width: 70px;
  }

  @media(min-width: 1300px) {
    width: 100px;
  }
`;

const Div = styled.div`
  position: relative;
  height: 100%; 
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,

        }
      }]
  };

  return (
    <Container {...Settings}>
      <Div>
        <ServiceImgContainer> <ServiceImg src={booking} /> </ServiceImgContainer>
        <IndivService>
          <Title>Booking</Title>
          <Description>We set up your appointment with a top-rated, certified specialist</Description>
        </IndivService>
        <ArrowButton to="/"><Arrow src={rightArrow} /></ArrowButton>
      </Div>
      <Div>
        <ServiceImgContainer> <ServiceImg src={transport} /> </ServiceImgContainer>
        <IndivService>
          <Title>Transportation</Title>
          <Description>We book personal transportation throughout your stay</Description>
        </IndivService>
        <ArrowButton to="/"><Arrow src={rightArrow} /></ArrowButton>
      </Div>
      <Div>
        <ServiceImgContainer> <ServiceImg src={accomodation} /> </ServiceImgContainer>
        <IndivService>
          <Title>Accomodation</Title>
          <Description>Stay at out partner hotels, save and enjoy the full NeighborHealth experience</Description>
        </IndivService>
        <ArrowButton to="/"><Arrow src={rightArrow} /></ArrowButton>
      </Div>
      <Div>
        <ServiceImgContainer> <ServiceImg src={travel} /> </ServiceImgContainer>
        <IndivService>
          <Title>Tourism</Title>
          <Description>V.I.P access to the Best Attractions in the city</Description>
        </IndivService>
        <ArrowButton to="/"><Arrow src={rightArrow} /></ArrowButton>
      </Div>
    </Container>

  );
};

export default Services;