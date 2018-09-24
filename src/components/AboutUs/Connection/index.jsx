import React, { Component } from 'react';
import styled from 'styled-components';

import nerdy from './../assets/nerdy.png';
import {device} from './../../../utils/device';

const Container = styled.div`
  font-size: calc(1rem + 0.75vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  margin: 4em 0;

  & > p {
    text-align: center;
    width: 100%;
    font-size: 1.5em;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 3em;
  margin-right: 0;

  font-size: 0.75em;

  ${device.tablet} {
    flex-direction: column;
    margin: 1.75em;
    margin-right: 0;
  }

`;

const TitleCont = styled.div`
  width: 100%;
  position: relative;

  ::before {
    content: "";
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

    p {
      width: 100%;
    }
  }
`;

const Title = styled.p`
  font-size: 1.75em;
  width: 60%;
  font-weight: bold;
`;
const BlueTitle = Title.withComponent('span').extend`
  font-size: 1em;
  color: ${props => props.theme.color.lightBlue};
`;

const TextContainer = styled.div`
  width: 60%;
  padding: 1.5em 2em;

  ${device.tablet} {
    width: 100%;
    order: 3;
    padding: 0;
  }
`;

const Text = styled.p`
  font-size: 1em;
`;
const BlueText = Text.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const ImageContainer = styled.div`
  width: 40%;
  transform: rotateY(180deg);

  ${device.tablet} {
    align-self: flex-end;
    order: 2;
    width: 60%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;

const UList = styled.ul`
  list-style-position: inside;
  &, & > li {
    margin: 1em 0;
  }
`;

const BubbleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin: 2em auto;

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
  opacity: ${props => props.isSelected ? 1 : 0.4};
  outline: none;

  cursor: pointer;

  transition: box-shadow 0.25s linear;
   
  :hover{
    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.3);
  }
  
  ${device.tablet} {
    transition: none;
    :hover {
      box-shadow: initial;
    }
  }
`;

class Connection extends Component {
  constructor() {
    super();

    this.state = {
      currentSelected: 0
    }

    this.bubbleClickHandler = this.bubbleClickHandler.bind(this);
  }

  bubbleClickHandler(event, key) {
    event.preventDefault();
    this.setState({
      currentSelected: key
    });
  }

  render() {
    let bubbles = [1,2,3,4,5,6,7,8];
    bubbles = bubbles.map((value, index) => {
      return (
        <Bubble 
          onClick={(event) => this.bubbleClickHandler(event, index)} 
          key={index} 
          isSelected={this.state.currentSelected === index} >
          {value}
        </Bubble>
      );
    })

    return (
      <Container id="how-it-works">
        <Title>How It Works</Title>
        <SlideContainer>
          <TitleCont>
            <Title>Your <BlueTitle>connection</BlueTitle> to easy and affordable <BlueTitle>healthcare</BlueTitle></Title>
          </TitleCont>

          <TextContainer>
            <Text>
              Let us take the stress away! <br/>
              After all, isn't that what a good neighbor is all about? <br/>
              Two <BlueText>easy</BlueText> ways to begin your <BlueText>journey</BlueText>
            </Text>
            <UList>
              <li>Send us a message through our website</li>
              <li>Call us at: <BlueText>+1-512-717-3280</BlueText></li>
            </UList>
          </TextContainer>

          <ImageContainer>
            <Image src={nerdy} />
          </ImageContainer>
        </SlideContainer>

        <BubbleContainer>
          {bubbles}
        </BubbleContainer>
      </Container>
    );
  }
}

export default Connection;