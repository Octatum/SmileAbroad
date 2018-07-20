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

// Container of entire component
const Container = styled.div`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

// Component Title
const Title = styled.p`
  font-size: calc(2.5rem + 1.25vw);
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
  background-color: grey;

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

  @media(max-width: 500px) {
    height: 100px;
  }
`;

// Subtitle
const Subtitle = styled.p`
  color: black;
  font-size: calc(1.15rem + 1vw);
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
  font-size: calc(0.75rem + 1vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  text-align: center;
  width: 90%;

  @media(max-width: 500px) {
    font-size: 0.75rem;
  }

  @media(max-width: 320px) {
    font-size: 0.65rem;
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
  width: 200px;
  height: 100px;
  margin: 20px;
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
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }]
  };
  
  return (

    <Container>
      <Title>We got you <BlueTitle>cover</BlueTitle></Title>
      <InfoContainer {...Settings} >
        <Div>
          <IMG> <Image src={clock} /> </IMG>
          <SubCont> <Subtitle>We are here for you</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>Ready to help you 24/7 </Description></ContDesc>
        </Div>
        <Div>
          <IMG> <Image src={calendar} /> </IMG>
          <SubCont> <Subtitle>Making your life easier</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>We give you peace of mind by making your accomodation reservations, setting up tourist activities, your dental appointments, and transportation to and fro the clinic and the airport!</Description> </ContDesc>
        </Div>
        <Div>
          <IMG> <Image src={board} /> </IMG>
          <SubCont> <Subtitle>Get a FREE ESTIMATE from a certified specialist</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>At NeighborHealth we provide you with access to our world-renown dental care network of certified dental clinics</Description></ContDesc>
        </Div>
        <Div>
          <IMG> <Image src={photos} /> </IMG>
          <SubCont> <Subtitle>The NeighborHealth Experience</Subtitle> </SubCont>
          <Separator />
          <ContDesc> <Description>Receive a personal plan which includes photos of hotel options, recommendations for tourist attractions and activities, and background information about your Certified Specialist</Description></ContDesc>
        </Div>
      </InfoContainer>
      <Track>Neighbor<BlueTrack>Health</BlueTrack>'s Track Record</Track>
      <OtherComps> <CompImg /> <CompImg /> <CompImg /> <CompImg /> <CompImg /> <CompImg /> </OtherComps>
    </Container>
  )
};

export default AddedValue;