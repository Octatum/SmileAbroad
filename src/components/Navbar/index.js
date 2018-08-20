import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from './assets/logo.svg';
import navicon from './assets/navicon.svg';

import GetStartedButton from './../GetStarted/Button';
import ButtonComp from './../Button';


const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px;

  @media(max-width: 1300px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const LogoLink = styled(Link)`
  width: 20em;

  @media(max-width: 1300px) {
    width: 50%;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ToggleShowButton = styled.div`
  margin-left: auto;
  display: none;
  height: 100px;
  width: 100px;
 
  justify-content: center;
  align-items: center;

  @media(max-width: 1300px) {
    display: flex;
  }
`;

const Navicon = styled.img`
  width: 40%;

  @media(min-width: 1024px) {
    width: 70%;
  }

  @media(min-width: 768px) {
    width: 55%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 20px;
  width: 45%;
  height: 100%;

  @media(max-width: 1300px) {
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

  @media(max-width: 1300px) {
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