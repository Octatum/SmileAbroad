import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from './assets/logo.svg';
import navicon from './assets/navicon.svg';

import GetStartedButton from '../GetStarted/Button';
import ButtonComp from '../Button';
import {device} from '../../utils/device';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
  padding: 0 3vw;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1;

  ${device.tablet} {
    margin: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const LogoLink = styled(Link)`
  width: 20em;

  ${device.tablet} {
    width: 40%;
    min-width: 14em;
    max-width: 20em;
    padding: 1em 0;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ToggleShowButton = styled.div`
  margin-left: auto;
  display: none;
 
  justify-content: center;
  align-items: center;

  ${device.tablet} {
    display: flex;
    height: 100px;
    width: 100px;
  }
  ${device.mobile} {
    height: calc(50px + 1vw);
    width: calc(50px + 1vw);    
  }
`;

const Navicon = styled.img`
  width: 40%;

  ${device.laptop} {
    width: 70%;
  }

  ${device.tablet} {
    width: 55%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 20px;
  width: 60%;
  height: 100%;

  ${device.tablet} {
    flex-direction: column;
    justify-content: center;

    overflow-y: hidden;
    display: ${props => props.display ? 'flex' : 'none'};
    width: 100%;
  }
`;

// To replace Navitem-navLink components
const Temp = ButtonComp(Link).extend`
  margin: 10px 1em;
  padding: 0;
  font-size: calc(1rem + 0.5vw);
  ::before {
    bottom: -10%;
  }
`;

const GetStarted = styled(GetStartedButton)`
  display: flex;
  flex: 0 1 auto;
  margin-right: calc(2em - 1vw);

  ${device.tablet} {
    margin: 0;
    flex-direction: column;
    div {
      border: none;
      transition: none;
      background: none;
      color: black;

      &:hover {
        background: initial;
        border: none;
        color: black;
      }
    }

  }
`;

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      companySelection: false
    }

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    const isOpen = !this.state.open;
    this.setState({
      open: isOpen
    });
  }

  render() {
    return (
      <Container>
        <LogoLink to="/"><Logo src={logo}/></LogoLink>
        <ToggleShowButton >
          <Navicon onClick={this.handleToggleClick} src={navicon} />
        </ToggleShowButton>
        <Nav display={this.state.open}>
          <Temp to="/">Home</Temp>
          <Temp to="/Blogs">Blogs</Temp> 
          <Temp to="/AboutUs">About Us</Temp>
          <Temp to="/Contact">Contact</Temp>
          <GetStarted />
        </Nav>
      </Container>
    );
  }
}

export default Navbar;