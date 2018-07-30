import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ButtonComponent from './../../../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: calc(2rem + 1vw);
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
  font-size: calc(1rem + 0.5vw);
  line-height: 1.4em;
  max-width: 80%;
  margin: 20px 0;

  @media(max-width: 520px) {
    max-width: 80%;
  }
`

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

  @media(max-width: 1200px) {
    width: 100%;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  font-weight: 600;
  font-size: calc(1rem + 0.75vw);
  border-radius: 10px;

  padding: 10px 1em;

  color: black;
  border: 3px solid black;

  transition: box-shadow 0.25s linear;
  
  :hover{
    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.3);
  }
`;

const BlueButton = ButtonComponent(Link).extend`
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
          At <BlueText>NeighborHealth</BlueText> we help you find the ideal Dental Health Specialized Treatment.
        </Description>
        <Description>
          We facilitate the process of your experience abroad by creating a personalized itinerary at budget-friendly prices.
        </Description>
        <ButtonCont>
          <BlueButton to="/GetStarted">Learn More</BlueButton>
          <Button to="/GetStarted">Get started</Button>
        </ButtonCont>
        <BubbleCont>
          {[].map((_, index) => (
            <Bubble
              onClick={e => this.bubbleClick(e, index)}
              current={this.state.currentActiveBubble === index} 
            />
          ))}
        </BubbleCont>
      </Container>
    );
  }
};

export default ServiceSlide;