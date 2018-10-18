import React from 'react';
import styled from 'styled-components';

import ServiceSlide from './ServicesSlide';
import Services from './Services';
import { device } from '../../../utils/device';

import background1 from './assets/1.jpg';
import background2 from './assets/2.jpg';
import background3 from './assets/3.jpg';

const SlideShow = styled.div`
  min-height: 100vh;
  text-align: center;
  display: grid;
  grid-template: 1fr 6fr 1fr / 5fr 4fr;
  position: relative;
  grid-template-areas:
    '. .'
    'Pres .'
    '. .';

  ${device.tablet} {
    display: block;
    min-height: 0;
    padding: 5em 0;
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ::before {
    z-index: -2;
    background-image: url(${({background}) => background});
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
    background-color: #d6d6d4;
  }

  ::after {
    z-index: -1;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,0082e5+100 */
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(
      left,
      #ffffff 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      #ffffff 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      #ffffff 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
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

const ServicesComp = styled(Services)`
  margin: 50px 0;
`;

const Slider = styled(ServiceSlide)`
  grid-area: Pres;
`;

class OurServices extends React.Component {
  state = {
    currentActiveBubble: 0
  };

  bubbleClick = (index) => {
    this.setState({
      currentActiveBubble: index
    });
  }

  render() {
    const backgroundImages = [{
      key: "1",
      image: background1
    }, {
      key: "2",
      image: background2
    }, {
      key: "3",
      image: background3
    }];

    return (
      <div>
        <SlideShow background={backgroundImages[this.state.currentActiveBubble].image}>
          <Slider>
            <BubbleCont>
              {backgroundImages.map((item, index) => (
                <Bubble
                  onClick={() => this.bubbleClick(index)}
                  current={this.state.currentActiveBubble === index}
                  key={item.key}
                />
              ))}
            </BubbleCont>
          </Slider>
        </SlideShow>
        <ServicesComp />
      </div>
    );
  }
}

export default OurServices;
