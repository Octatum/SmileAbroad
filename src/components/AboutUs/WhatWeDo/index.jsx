import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Idea from './../assets/Idea.png';
import People from './../assets/People.png';
import Plane from './../assets/Plane.png';

const Container = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const SliderMod = styled(Slider)`
`;

const Div = styled.div`
  position: relative;
  height: 100%; 
  font-size: calc(0.5rem + 1vw);
  p {
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
    text-align: center;
  }

  > * {
    margin-bottom: 1em;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 0;    

    width: 100%;
    height: 20%;
    background: ${props => props.theme.color.lightBlue};
  }
`;
const Icon = styled.img`
  width: 30%;
  position: relative;
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;
const BlueTitle = Title.withComponent('span').extend`
  font-size: 1em;
  color: ${props => props.theme.color.lightBlue};
`;

const Text = styled.p`
  width: 80%;
  margin: 0 auto;
  
`;

const WhatWeDo = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }]
  };



  return (
    <Container> 
      <SliderMod {...Settings} >
        <Div>
          <IconContainer> <Icon src={Idea} /> </IconContainer>
          <Title>We are <BlueTitle>innovative</BlueTitle> </Title>
          <Text>
            We leverage all the technological tools at our disposal and our local expertise
            to make the "impossible" happen. We blieve these are the key ingredients essential
            for growth and to ensure continued loyalty from our customers.
          </Text>
        </Div>
        <Div>
          <IconContainer> <Icon src={People} /> </IconContainer>
          <Title>We believe in a <BlueTitle>community</BlueTitle> </Title>
          <Text>
            Helping one another to ensure mutual success as individuals and as a community.
            This is why we do what we do at NeighborHealth. We believe that healthcare should 
            be easy and affordable. Our health leaders are here to serve you. Additionally, we 
            believe in building our communities, we provide similar services to children 
            in developing nations.
          </Text>
        </Div>
        <Div>
          <IconContainer> <Icon src={Plane} /> </IconContainer>
          <Title>Our service <BlueTitle>pledge</BlueTitle> </Title>
          <Text>
            We pledge to provide you with a healing, safe and enjoyable experience while using 
            our services by adhering to coontinuous improvement practices, hiring talented and 
            friendly individuals, and by implementing inclusive practices every step of the way.
          </Text>
        </Div>
      </SliderMod>
    </Container>
  )
};

export default WhatWeDo;