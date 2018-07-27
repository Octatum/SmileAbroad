import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';

import clock from './assets/clock.png';
import calendar from './assets/calendar.png';
import board from './assets/board.png';
import photos from './assets/photos.png';

import eogsea from './assets/eogsea.png';
import plugplay from './assets/plugplay.png';
import sksw from './assets/sksw.png';
import promexico from './assets/promexico.png';
import mexico from './assets/mexico.png';
import newVenture from './assets/newventure.png';

const customerImages = [
  eogsea,
  plugplay,
  sksw,
  promexico,
  mexico,
  newVenture
];

// Container of entire component
const Container = styled.div`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

// Component Title
const Title = styled.p`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  align-self: flex-start;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
`;

const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const InfoContainer = styled(Slider)`
  margin: 30px;
  margin-bottom: 70px;

  & div {
    outline: none;
  }
`;

// img container to maintain sizing
const IMG = styled.div`
  margin: 0 auto 40px auto;

  @media(max-width: 500px) {
    margin: auto;
  }
`;

// img object
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;

  @media(max-width: 375px) {
    width: 75px;
    height: 75px;
  }
`;

// Subtitle (title of service) container
const SubCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;

`;

// Subtitle
const Subtitle = styled.p`
  color: black;
  font-size: calc(1.5rem);
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 90%;
  text-align: center;

  @media(max-width: 500px) {
    font-size: 1rem;
  }
  @media(max-width: 375px) {
    font-size: 0.75rem;
  }
`;

// Service Description Container
const ContDesc = styled.div`
  display: flex;
  justify-content: center;
`;

// Description object
const Description = styled.p`
  font-size: 1.2rem;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  text-align: center;
  width: 90%;
  word-wrap: break-word;

  @media(max-width: 500px) {
    font-size: 1.1rem;
  }

  @media(max-width: 320px) {
    font-size: 1rem;
    width: 100%;
  }
`;

// Separator
const Separator = styled.hr`
  height: 5px;
  background: #00C6DB;
  width: 25%;
  margin: 20px auto;
  border: none;
  border-radius: 10px;
`;

const Track = Subtitle.extend`
  margin: 20px auto;
  width: 100%;
`;
const BlueTrack = Track.withComponent('span').extend`
  color: #00C6Db;
`;

const OtherComps = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
`;
const CompImg = Image.extend`
  max-width: 100%;
  height: auto;
  margin: 20px;
  object-fit: contain;
`;

const Div = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const AddedValue = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
      }
    }]
  };
  
  return (

    <Container>
      <Title>We got you <BlueTitle>covered</BlueTitle></Title>
      <InfoContainer {...Settings} >
        <Div>
          <IMG> <Image src={clock} /> </IMG>
          <SubCont> <Subtitle>We are here for you</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>24/7 – We’re here for you, ready to help</Description></ContDesc>
        </Div>
        <Div>
          <IMG> <Image src={calendar} /> </IMG>
          <SubCont> <Subtitle>Making your life easier</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>We take care of setting up appointments, accommodation, transportation, and translation</Description> </ContDesc>
        </Div>
        <Div>
          <IMG> <Image src={board} /> </IMG>
          <SubCont> <Subtitle>Free estimates</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>NeighborHealth provides you with a personalized itinerary and access to our certified specialists and dental clinics</Description></ContDesc>
        </Div>
        <Div>
          <IMG> <Image src={photos} /> </IMG>
          <SubCont> <Subtitle>The NeighborHealth Experience</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>Safety, transparency, and quality service are part of our pledge</Description></ContDesc>
        </Div>
      </InfoContainer>
      {/* 
      <Track>Neighbor<BlueTrack>Health</BlueTrack>'s Track Record</Track>
      <OtherComps> 
        {customerImages.map((image, index) => <CompImg src={image} key={index} />)}
      </OtherComps>
      */}
    </Container>
  )
};

export default AddedValue;