import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: calc(1.8rem + 1.2vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-weight: 600;
  color: #202020;
  max-width: 50%;

  @media(max-width: 520px) {
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
  font-size: calc(1rem + 1.2vw);
  line-height: 1.4em;
  max-width: 70%;
  margin: 20px 0;

  @media(max-width: 520px) {
    max-width: 80%;
  }
`

const BlueText = Description.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`

const ButtonCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 20px 0;
  width: 70%;

  @media(max-width: 1200px) {
    width: 100%;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1rem + 1vw);
  border-radius: 10px;

  padding: 10px calc(1rem + 1.5vw);

  color: black;
  border: 3px solid black;

  transition: box-shadow 0.25s linear;
  :hover{

    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.3);
  }
`;

const BlueButton = Button.extend`
  color: white;
  background: ${props => props.theme.color.lightBlue};
  border: 3px solid transparent;
`;

const BubbleCont = ButtonCont.extend`
  height: auto;
  width: auto;

  @media(max-width: 1200px) {
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

  background: ${props => props.current ? props.theme.color.lightBlue : 'grey'};
  transform: ${props => props.current ? 'scale(1.1, 1.1)' : 'scale(1,1)'};
  transition: transform 0.25s ease-out;
              
  :hover {
    transform: scale(1.3, 1.3);
  }
`;

class ServiceSlide extends Component {
  constructor() {
    super();
    this.state = {
      currentActiveBubble: 1,
    };
  }

  bubbleClick(event, key) {
    event.preventDefault();
    /**
     * NEXT SLIDE
     */
    this.setState({
      currentActiveBubble: key
    });
  }
  render() {
    

    return (
      <Container className={this.props.className} >
        <Title>Affordable Health Care</Title>
        <Separator />
        <Description>
          At <BlueText>Neighbor Health</BlueText> we help you find the ideal Dental Health Specialized Treatment.
        </Description>
        <Description>
          We facilitate the process of your experience abroad by creating a personalized itinerary at budget-friendly prices.
        </Description>
        <ButtonCont>
          <BlueButton to="/">Learn More</BlueButton>
          <Button to="/GetStarted">Get started</Button>
        </ButtonCont>
        <BubbleCont>
          <Bubble
            onClick={e => this.bubbleClick(e, 1)}
            current={this.state.currentActiveBubble === 1 ? true : false} />
          <Bubble
            onClick={e => this.bubbleClick(e, 2)}
            current={this.state.currentActiveBubble === 2 ? true : false} />
          <Bubble
            onClick={e => this.bubbleClick(e, 3)}
            current={this.state.currentActiveBubble === 3 ? true : false} />
        </BubbleCont>
      </Container>
    );
  }
};

export default ServiceSlide;