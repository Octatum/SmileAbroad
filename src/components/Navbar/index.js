import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import downArrow from './assets/downArrow.svg';
import logo from './assets/logo.svg';
import navicon from './assets/navicon.svg';
import GetStartedButton from './../GetStarted/Button';

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

/* CHANGE HEIGHT ON ADDED IMAGE */
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


/*
ANIMATE NAV DROPDOWN
*/


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

const NavItem = styled.div`
  display: flex;
  flex: 0 1 auto;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1rem + 0.5vw);
  position: relative;
  margin-right: calc(2em - 1vw);
  
  
  @media(max-width: 1300px) {
    margin: 0;
    flex-direction: column;
  }

  &:hover > ${NavLink}::before {
    width: ${props => props.animateSelection ? 'initial' : '100%'};
    left: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  text-align: center;
  margin: 10px 0;
  font-weight: 600;

  @media(min-width: 1300px) {
    &::before {
      content: "";
      width: 0%;
      border-bottom: 3px solid ${props => props.theme.color.lightBlue};
      display: block;
      position: absolute;
      bottom: -10%;
      left: 50%;
      transition: width 0.5s ease-out, left 0.5s ease-out;
    }
  }
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  display: block;  
  top: 85%;
  left: 0;

  padding-bottom: 1rem;
  padding-right: 1rem;
  overflow: hidden;

  @media(max-width: 1300px) {
    position: relative;
    display: ${props => props.display ? 'block' : 'none'};
  }

`;

const CompanyHover = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  transform: translate(0, -110%);
  transition: transform 0.65s ease, opacity 0.45s ease;
  opacity: 0;
  z-index: 1;

  @media(min-width: 1300px) {
    ${NavItem} {
      &:hover > ${PlaceholderContainer} > & {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }

  @media(max-width: 1300px) {
    height: 100%;
    width: 100%;
    top: 0;
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const ShadowBox = styled.div`
  position: absolute;
  z-index: -1;
  right: -0.5rem;
  bottom: -0.5rem;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.3); 
  filter: blur(2px);

  @media(max-width: 1300px) {
    display: none;
  }
`;

const DropArrow = styled.img`
  width: 10px;
  position: absolute;
  top: 50%;

  transition: transform 1s ease;
  transform: rotate(${props => props.isOpen ? 180 : 0 }deg);

  @media(max-width: 1300px) {
    top: 0.8em;
  }
`;

const SelectionLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  text-align: center;
  background: white;
  
  padding: 5px;
  font-size: calc(0.75rem + 1vw);
  flex: 0 1 auto;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${props => props.theme.color.lightBlue};
    color: white;
  }

`;


const GetStartedCont = styled.div`
  display: flex;
  flex: 0 1 auto;
  margin-right: calc(2em - 1vw);

  @media(max-width: 1300px) {
    margin: 0;
    flex-direction: column;
  }
`;

const GetStarted = styled(GetStartedButton)`
  @media(max-width: 1300px) {
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
    this.handleCompany = this.handleCompany.bind(this);
  }

  handleCompany(event) {
    event.preventDefault();
    const isOpen = !this.state.companySelection;
    this.setState({
      companySelection: isOpen
    });
  }

  handleToggleClick() {
    const isOpen = !this.state.open;
    this.setState({
      open: isOpen
    });
  }

  render() {
    const hoveredSelection = (
      <PlaceholderContainer display={this.state.companySelection} >
        <CompanyHover>
          <SelectionLink to="/">opcion1</SelectionLink>
          <SelectionLink to="/">Opcion2</SelectionLink>
          <SelectionLink to="/">Opcion3</SelectionLink>
          <SelectionLink to="/">Opcion4</SelectionLink>
          <ShadowBox />
        </CompanyHover>
      </PlaceholderContainer>
    );

    return (
      <Container>
        <LogoLink to="/"><Logo src={logo}/></LogoLink>
        <ToggleShowButton >
          <Navicon onClick={this.handleToggleClick} src={navicon} />
        </ToggleShowButton>
        <Nav display={this.state.open}>
          <NavItem> <NavLink to="/">Home</NavLink> </NavItem>
          {/*
          <NavItem> <NavLink to="/">Blog</NavLink> </NavItem>
          
          <NavItem animateSelection>
            <div onClick={this.handleCompany} style={{fontWeight: 600}}>Company<DropArrow src={downArrow} isOpen={this.state.companySelection}/></div>
            {hoveredSelection}
          </NavItem>
          */}
          <NavItem> <NavLink to="/AboutUs">About Us</NavLink> </NavItem> 
          <NavItem> <NavLink to="/contact">Contact</NavLink> </NavItem>
          <GetStartedCont> <GetStarted /> </GetStartedCont>
        </Nav>
      </Container>
    );
  }
}

export default Navbar;