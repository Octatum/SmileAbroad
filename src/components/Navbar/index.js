import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import downArrow from './assets/downArrow.svg';
import logo from './assets/logo.svg';

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

  @media(max-width: 800px) {
    margin: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

/* CHANGE HEIGHT ON ADDED IMAGE */
const LogoLink = styled(Link)`
  width: 20em;


  @media(max-width: 800px) {
    width: 50%;
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
  height: 100px;
  width: 100px;
  color: #333;
  font-size: 3em;
  
  @media(max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
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

  @media(max-width: 800px) {
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
  
  
  @media(max-width: 800px) {
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
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  display: block;  
  top: 85%;
  left: 0;

  padding-bottom: 1rem;
  padding-right: 1rem;
  overflow: hidden;

  @media(max-width: 800px) {
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

  @media(min-width: 800px) {
    ${NavItem}:hover > ${PlaceholderContainer} > & {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  @media(max-width: 800px) {
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

  @media(max-width: 800px) {
    display: none;
  }
`;

const DropArrow = styled.img`
  width: 10px;
  position: absolute;
  top: 50%;

  transition: transform 1s ease;
  transform: rotate(${props => props.isOpen ? 180 : 0 }deg);

  @media(max-width: 800px) {
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

const GetStarted = NavItem.extend`
  border-radius: 1rem;
  color: white;
  background: ${props => props.theme.color.lightBlue};
  padding: 5px 15px;
  transition: all 0.25s linear;
  border: 2px solid transparent;

  :hover {
    background: white;
    border: 2px solid ${props => props.theme.color.lightBlue};
    color: ${props => props.theme.color.lightBlue};
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

  handleToggleClick(event) {
    const isOpen = !this.state.open;
    this.setState({
      open: isOpen
    });
    console.log(this.state.open);
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
        <ToggleShowButton onClick={this.handleToggleClick}>
          <i className="fa fa-bars" />
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
          <NavItem> <NavLink to="/contact">Contact</NavLink> </NavItem>
          <NavLink to="/GetStarted"> <GetStarted>Get started</GetStarted> </NavLink>
        </Nav>
      </Container>
    );
  }
}

export default Navbar;