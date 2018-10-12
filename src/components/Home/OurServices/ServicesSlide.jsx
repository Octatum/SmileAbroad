import React, { Component } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

import ButtonComponent from '../../Button';
import GetStartedButton from '../../GetStarted/Button';
import { device } from '../../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0.75rem + 0.5vw);
`;

const Title = styled.p`
  font-size: 2em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-weight: 600;
  color: black;
  max-width: 50%;

  ${device.mobile} {
    max-width: 70%;
  }
`;

const Separator = styled.hr`
  background: ${props => props.theme.color.lightBlue};
  height: 7px;
  width: 25%;
  border-radius: 10px;
  border: none;
  margin: 15px 0;
`;

const Description = styled.p`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  line-height: 1.4em;
  max-width: 80%;
  margin: 20px 0;

  ${device.mobile} {
    max-width: 80%;
  }
`;

const Bold = Description.withComponent('span').extend`
  font-weight: bold;
`;

const BlueText = Description.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 20px 0;
  width: 70%;

  ${device.laptop} {
    width: 100%;
  }
`;

const GetStarted = styled(GetStartedButton)`
  font-size: 1.25em;
  div {
    border-radius: 10px;
    padding: 10px 1em;
    &:hover {
      background: none;
    }
  }
`;

const VideoLink = styled.a``;

const Slide = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlueButton = styled(ButtonComponent(VideoLink))`
  padding: 10px 1em;
  font-size: 1.25em;
  cursor: pointer;
`;

const BubbleCont = ButtonCont.extend`
  height: auto;
  width: auto;

  ${device.laptop} {
    width: auto;
  }
`;

const Bubble = styled.button`
  text-decoration: none;
  height: 20px;
  width: 20px;
  border-radius: 10px 10px;
  border: 2px solid transparent;
  margin: 0 8px;
  cursor: pointer;
  outline: 0;
  position: relative;

  background: ${props =>
    props.current ? props.theme.color.lightBlue : 'grey'};
  transform: ${props => (props.current ? 'scale(1.1, 1.1)' : 'scale(1,1)')};
  transition: transform 0.25s ease-out;

  :hover {
    transform: scale(1.3);
  }
`;

const contentStyle = {
  padding: '0',
  border: '0',
  background: 'black',
  width: 'initial',
};

class ServiceSlide extends Component {
  constructor() {
    super();
    this.state = {
      currentActiveBubble: 0,
    };

    this.onClickVideoHandle = this.onClickVideoHandle.bind(this);
  }

  onClickVideoHandle(event) {
    event.preventDefault();
    window.open(
      'https://www.youtube.com/watch?v=ra8YOIDrozc',
      'Video',
      'width=500,height=500'
    );
  }

  bubbleClick(event, key) {
    event.preventDefault();
    /**
     * NEXT SLIDE
     */
    this.setState({
      currentActiveBubble: key,
    });
  }
  render() {
    return (
      <Container className={this.props.className}>
        <Slide isShow={this.state.currentActiveBubble === 0}>
          <Title>Affordable Health Care</Title>
          <Separator />
          <Description>
            At <BlueText>NeighborHealth</BlueText> we help you find the ideal
            Dental Health <Bold>Specialized</Bold> Treatment.
          </Description>
          <Description>
            We facilitate the process of your experience abroad by creating a{' '}
            <Bold>personalized</Bold> itinerary at <Bold>budget-friendly</Bold>{' '}
            prices.
          </Description>
          <Description>
            Go ahead, Visit Mexico to get your quality dental treatment at a
            price you can afford.
          </Description>
          <ButtonCont>
            <Popup
              contentStyle={contentStyle}
              trigger={<BlueButton>Watch Video</BlueButton>}
              modal>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ra8YOIDrozc"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
              />
            </Popup>
            <GetStarted />
          </ButtonCont>
        </Slide>

        <BubbleCont>
          {[0, 1, 2].map((_, index) => (
            <Bubble
              onClick={e => this.bubbleClick(e, index)}
              current={this.state.currentActiveBubble === index}
              key={'Bubble-' + (index + 1)}
            />
          ))}
        </BubbleCont>
      </Container>
    );
  }
}

export default ServiceSlide;
