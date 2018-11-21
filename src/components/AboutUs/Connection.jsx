import React, { Component } from 'react';
import styled from 'styled-components/macro';

import nerdy from './assets/nerdy.png';
import { device } from './../../utils/device';

import arrow from './assets/arrow.svg';
import step1 from './assets/hiw-step-1.png';
import step2 from './assets/hiw-step-2.png';
import step3 from './assets/hiw-step-3.png';
import step4 from './assets/hiw-step-4.png';
import step5 from './assets/hiw-step-5.png';

const Container = styled.div`
  font-size: calc(1rem + 0.75vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  position: relative;

  & > p {
    text-align: center;
    font-size: 1.5em;
    margin: 0 auto;
    text-decoration: underline ${props => props.theme.color.lightBlue};
  }
`;

const SlideContainer = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;

  margin: 1.5em 3em;
  margin-right: 0;

  font-size: 0.75em;

  p {
    width: 100%;
  }
  ${device.tablet} {
    flex-direction: column;

    margin: 1.75em;
    margin-right: 0;

    p {
      width: 90%;
    }
  }
`;

const TitleCont = styled.div`
  width: 100%;
  position: relative;
  margin: 1em 0em;
  font-size: 0.8em;
  height: auto;

  ::before {
    content: '';
    position: absolute;
    width: 3em;
    height: 0.2em;
    background: ${props => props.theme.color.lightBlue};
    border-radius: 10px;
    bottom: 0;
  }

  ${device.tablet} {
    width: 100%;
    order: 1;
  }
`;

const Title = styled.p`
  font-size: 1.75em;
  font-weight: bold;
`;

const BlueTitle = styled(Title)`
  font-size: 1em;
  color: ${props => props.theme.color.lightBlue};
`;

const TextContainer = styled.div`
  width: 60%;
  padding: 1em 1.5em;

  ${device.tablet} {
    width: 90%;
    order: 3;
    padding: 0;
  }
`;

const Text = styled.p`
  font-size: 1em;
`;

const BlueText = styled(Text)`
  color: ${props => props.theme.color.lightBlue};
`;

const ImageContainer = styled.div`
  width: 40%;
  padding-right: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  ${device.tablet} {
    align-self: flex-end;
    order: 2;
    width: 60%;
  }
`;
const Image = styled.img`
  max-width: 25rem;
  height: auto;
`;

const UList = styled.ul`
  list-style-position: inside;
  &,
  & > li {
    margin: 0.75rem 0;
  }
`;

const BubbleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin: 2em auto;
  margin-top: 0.5rem;

  ${device.mobile} {
    width: 90%;
    margin-top: 1em;
  }
`;

const Bubble = styled.button`
  text-decoration: none;
  border: none;

  font-weight: 600;
  font-size: 0.8em;
  color: white;

  width: 2em;
  height: 2em;
  border-radius: 50%;

  background: ${props => props.theme.color.lightBlue};
  opacity: ${props => (props.isSelected ? 1 : 0.4)};
  outline: none;

  cursor: pointer;

  transition: box-shadow 0.25s linear;

  :hover {
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);
  }

  ${device.tablet} {
    transition: none;
    :hover {
      box-shadow: initial;
    }
  }
`;

const ChangeSlideArrows = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const SlideArrow = styled.img`
  height: 2em;
  cursor: pointer;
`;

const NextSlideArrow = styled(SlideArrow)`
  transform: rotate(0.25turn);
`;

const PreviousSlideArrow = styled(SlideArrow)`
  transform: rotate(-0.25turn);
`;

class Connection extends Component {
  constructor() {
    super();

    this.state = {
      currentSelected: 0,
    };

    this.bubbleClickHandler = this.bubbleClickHandler.bind(this);
  }

  getPrevSlide = () => {
    const currentSelected = this.state.currentSelected;
    this.setState({ currentSelected: (currentSelected + 4) % 5 });
  };

  getNextSlide = () => {
    const currentSelected = this.state.currentSelected;
    this.setState({ currentSelected: (currentSelected + 1) % 5 });
  };

  bubbleClickHandler(event, key) {
    event.preventDefault();
    this.setState({
      currentSelected: key,
    });
  }

  render() {
    let bubbles = [0, 1, 2, 3, 4];
    bubbles = bubbles.map((value, index) => {
      return (
        <Bubble
          onClick={event => this.bubbleClickHandler(event, value)}
          key={index}
          isSelected={this.state.currentSelected === value}
        >
          {value + 1}
        </Bubble>
      );
    });

    return (
      <Container className={this.props.className}>
        <span
          id="how-it-works"
          style={{ position: 'absolute', visibility: 'hidden', top: '-100px' }}
        />
        <Title>How It Works</Title>

        <ChangeSlideArrows>
          <NextSlideArrow onClick={this.getPrevSlide} src={arrow} />
          <PreviousSlideArrow onClick={this.getNextSlide} src={arrow} />
        </ChangeSlideArrows>

        <SlideContainer show={this.state.currentSelected === 0}>
          <Title>
            {' '}
            <BlueTitle as="span">Step 1</BlueTitle> - Contact Us!
          </Title>

          <TitleCont>
            <Title>
              Your <BlueTitle as="span">connection</BlueTitle> to easy and
              affordable <BlueTitle as="span">healthcare</BlueTitle>
            </Title>
          </TitleCont>

          <TextContainer>
            <Text>
              Let us take the stress away! <br />
              After all, isn't that what a good neighbor is all about? <br />
              To begin your <BlueText as="span">journey</BlueText> send us a
              <br /> message through our website
            </Text>
          </TextContainer>

          <ImageContainer>
            <Image src={step1} />
          </ImageContainer>
        </SlideContainer>

        <SlideContainer show={this.state.currentSelected === 1}>
          <Title>
            <BlueTitle as="span">Step 2</BlueTitle> - Personalized Plan
          </Title>
          <TitleCont>
            <Title>
              Receive a <BlueTitle as="span">personalized plan</BlueTitle> which
              includes:{' '}
            </Title>
          </TitleCont>

          <TextContainer>
            <UList>
              <li>Dentist's profile</li>
              <li>Estimated cost and days abroad for your dental treatment</li>
              <li>Accommodation options</li>
              <li>Touristic recommendations and exclusive coupons</li>
              <li>
                NeighborHealth services: Transportation to and from the airport
                and between your appointments.
              </li>
              <li>Total savings</li>
            </UList>
          </TextContainer>
          <ImageContainer>
            <Image src={step2} />
          </ImageContainer>
        </SlideContainer>

        <SlideContainer show={this.state.currentSelected === 2}>
          <Title>
            <BlueTitle as="span">Step 3</BlueTitle> - Help us help you!
          </Title>

          <TextContainer>
            <Text>
              Provide us your dental studies to help our certified specialist
              abroad define your personal treatment. (e.g Digital Dental
              Panorama, Dental Cone Beam CT, Radiography, etc).
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src={step3} />
          </ImageContainer>
        </SlideContainer>

        <SlideContainer show={this.state.currentSelected === 3}>
          <Title>
            <BlueTitle as="span">Step 4</BlueTitle> - Payment
          </Title>

          <TitleCont>
            <Title>
              The <BlueTitle as="span">payment</BlueTitle> is divided in two
              different sections
            </Title>
          </TitleCont>

          <TextContainer>
            <UList>
              <li>
                <BlueText as="span">The deposit:</BlueText> part of the deposit
                is a security for the dentist to secure your place an
                appointment. The other, is to book your hotel, tourist
                activities and transportation services.
              </li>
              <li>
                <BlueText as="span">Final payment:</BlueText> is the remaining
                amount and must be provided once you have arrived at the dental
                clinic.
              </li>
            </UList>
          </TextContainer>
          <ImageContainer>
            <Image src={step4} />
          </ImageContainer>
        </SlideContainer>

        <SlideContainer show={this.state.currentSelected === 4}>
          <Title>
            <BlueTitle as="span">Step 5</BlueTitle> - Are you ready? Receive
            your agenda
          </Title>

          <TitleCont>
            <Title>
              <BlueTitle as="span">NeighborHealth</BlueTitle> will provide your
              personalized itinerary, which includes:
            </Title>
          </TitleCont>

          <TextContainer>
            <UList>
              <li>Your chosen accommodation reservation.</li>
              <li>Your exclusive codes for tourist attractions.</li>
              <li>Recommendation of places to eat in the zone.</li>
              <li>
                NeighborHealth representative that will assist you during your
                stay.
              </li>
            </UList>
            <Text>
              Your personalized itinerary will arrive before you set out on your
              trip, so your family and friends will always know where and how to
              keep in contact with you.
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src={step5} />
          </ImageContainer>
        </SlideContainer>

        <BubbleContainer>{bubbles}</BubbleContainer>
      </Container>
    );
  }
}

export default Connection;
