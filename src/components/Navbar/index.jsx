import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Link from 'gatsby-link';

import logo from './assets/logo.svg';
import navicon from './assets/navicon.svg';

import GetStartedButton from '../GetStarted/Button';
import ButtonComp from '../Button';
import Selection from './Selection';
import { device } from '../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
  padding: 0 3vw;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;

  font-size: calc(0.75rem + 0.5vw);

  ${device.tablet} {
    margin: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
`;

const LogoLink = styled(Link)`
  width: 25%;
  max-width: 15em;

  ${device.laptop} {
    width: 10em;
  }

  ${device.tablet} {
    width: 40%;
    min-width: 7em;
    max-width: 15em;
    padding: 1em 0;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const PhoneNumber = styled('div')`
  font-size: 0.75em;
  position: absolute;
  top: 0;
  right: 3.5em;
  font-family: ${({theme}) => theme.fontFamily.main};
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

  padding: 25px;
  padding-right: 0;
  width: 70%;
  height: 100%;

  ${device.tablet} {
    flex-direction: column;
    justify-content: center;

    overflow-y: hidden;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    width: 100%;

    a {
      margin: 0.1em auto;
    }
  }
`;

const GetStarted = styled(GetStartedButton)`
  display: flex;
  flex: 0 1 auto;
  font-size: 1em;

  ${device.tablet} {
    flex-direction: column;
    div {
      border: none;
      transition: none;
      background: none;
      color: ${({ theme }) => theme.color.black};

      &:hover {
        background: initial;
        border: none;
        color: ${({ theme }) => theme.color.black};
      }
    }
  }
`;

const NavLink = ButtonComp(Link);

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      companySelection: false,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleSelectionClick = this.handleSelectionClick.bind(this);
  }

  handleToggleClick() {
    const isOpen = !this.state.open;
    this.setState({
      open: isOpen,
    });
  }

  handleSelectionClick() {
    const isOpen = !this.state.companySelection;
    this.setState({
      companySelection: isOpen,
    });
  }

  render() {
    return (
      <Container>
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
        <ToggleShowButton>
          <Navicon onClick={this.handleToggleClick} src={navicon} />
        </ToggleShowButton>
        <Nav isOpen={this.state.open}>
          <NavLink to="/blog">Blogs</NavLink>
          <NavLink to="/about#how-it-works">How it Works</NavLink>
          <NavLink to="/about#pricing">Pricing</NavLink>
          <NavLink to="/faq">FAQs</NavLink>
          <Selection
            links={[
              { url: '/network', name: 'Our Network' },
              { url: '/about', name: 'About Us' },
            ]}
            isOpen={this.state.companySelection}
            clickAction={this.handleSelectionClick}
          >
            Company
          </Selection>
          <GetStarted />
          <PhoneNumber>+1 512 717 3280</PhoneNumber>
        </Nav>
      </Container>
    );
  }
}

export default Navbar;
