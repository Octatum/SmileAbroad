import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Slider from 'react-slick';

import rightArrow from './../../../assets/rightArrow.svg';

/* const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template: 2fr auto 1fr / repeat(4, 1fr); 
  grid-template-areas:
    "img1 img2 img3 img4"
    "book trans acc tour"
    "arrow1 arrow2 arrow3 arrow4";
  box-sizing: border-box;
  padding: 50px;

`; */

const Container = styled(Slider)`
  margin: 50px 0;
`;

const ServiceImgContainer = styled.div`
  width: 50%;
  margin: auto;
`;
const IMG1 = ServiceImgContainer.extend`
  grid-area: img1;
`;
const IMG2 = ServiceImgContainer.extend`
  grid-area: img2;
`;
const IMG3 = ServiceImgContainer.extend`
  grid-area: img3;
`;
const IMG4 = ServiceImgContainer.extend`
  grid-area: img4;
`;

const ServiceImg = styled.img`
  position: relative;
  border-radius: 50%;
  background: grey;
  
  height: auto;
  width: 100%;
  padding-top: 100%;
`;

const IndivService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 70%;
  margin: 0 auto;
`;
const Booking = IndivService.extend`
  grid-area: book;
`;
const Transport = IndivService.extend`
  grid-area: trans;
`;
const Accomodation = IndivService.extend`
  grid-area: acc;
`;
const Tourism = IndivService.extend`
  grid-area: tour;
`;

const Title = styled.p`
  color: black;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1.5rem + 1vw);
  font-weight: 600;
  margin: 20px;
`;

const Description = Title.extend`
  font-size: 1.5rem;
  line-height: 1.3em;
  font-weight: 500;
`;

const ArrowButton = styled(Link)`
  width: 20%;
  text-decorations: none;
  margin: auto;

  align-self: flex-end;

  transition: transform 0.25s linear;
  :hover ${Arrow} {
    transform: scale(1.1) translate(10%);
  }
`;
const ArrowButton1 = ArrowButton.extend`
  grid-area: arrow1;
`;
const ArrowButton2 = ArrowButton.extend`
  grid-area: arrow2;
`;
const ArrowButton3 = ArrowButton.extend`
  grid-area: arrow3;
`;
const ArrowButton4 = ArrowButton.extend`
  grid-area: arrow4;
`;

const Arrow = styled.img`
  width: 100px;
  margin: auto;
`;

const Services = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    SlidesToScroll: 1,
  };

  return (
    <Container {...Settings}>
      <div>

        <IMG1> <ServiceImg /> </IMG1>
        <Booking>
          <Title>Booking</Title>
          <Description>We set up your appointment with a top-rated, certified specialist</Description>
        </Booking>
        <ArrowButton1 to="/"><Arrow src={rightArrow} /></ArrowButton1>
      </div>

      <div>

        <IMG2> <ServiceImg /> </IMG2>
        <Transport>
          <Title>Transportation</Title>
          <Description>We book personal transportation throughout your stay</Description>
        </Transport>
        <ArrowButton2 to="/"><Arrow src={rightArrow} /></ArrowButton2>
      </div>

      <div>

        <IMG3> <ServiceImg /> </IMG3>
        <Accomodation>
          <Title>Accomodation</Title>
          <Description>Stay at out partner hotels, save and enjoy the full NeighborHealth experience</Description>
        </Accomodation>
        <ArrowButton3 to="/"><Arrow src={rightArrow} /></ArrowButton3>
      </div>

      <div>

        <IMG4> <ServiceImg /> </IMG4>
        <Tourism>
          <Title>Tourism</Title>
          <Description>V.I.P access to the Best Attractions in the city</Description>
        </Tourism>
        <ArrowButton4 to="/"><Arrow src={rightArrow} /></ArrowButton4>
      </div>

    </Container>

  );
};

export default Services;