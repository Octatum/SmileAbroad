import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import downArrow from './../../../assets/downArrow.svg';

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
const Logo = styled.img`
  
  width: 100%;
  height: 150px;
  min-width: 150px;
  background-color: grey;

  @media(max-width: 1300px) {
    width: 50%;
  }
`;

const ToggleShowButton = styled.div`
  margin-left: auto;

  display: none;

  background: grey;
  height: 100px;
  width: 100px;
  
  @media(max-width: 1300px) {
    display: block;
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
  width: 100%;
  height: 100%;

  @media(max-width: 1300px) {
    flex-direction: column;
    justify-content: center;

    overflow-y: hidden;
    display: ${props => props.display ? 'flex' : 'none'};
  }
`;

const NavItem = styled.div`
  display: flex;
  flex: 0 1 auto;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1.2rem + 1vw);
  position: relative;
  margin-right: calc(2em - 1.5vw);
  

  &:hover > ${NavLink}::before {
    width: ${props => props.animateSelection ? 'initial' : '100%'};
    left: 0;
  }

  @media(max-width: 1300px) {
    margin: 0;
    flex-direction: column;
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
    bottom: 0;
    left: 50%;
    transition: width 0.5s ease-out, left 0.5s ease-out;
  }
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  position: absolute;
  display: block;  
  top: 85%;
  left: 0;

  padding-bottom: 10px;
  overflow: hidden;

  @media(max-width: 1300px) {
    position: relative;
    display: ${props => props.display ? 'block' : 'none'};
  }

`;

const CompanyHover = styled.div`
  width: 80%;
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
    ${NavItem}:hover > ${PlaceholderContainer} > & {
      transform: translate(0, 0);
      opacity: 1;
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
  left: 5px;
  top: 5px;
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
    top: 25px;
  }
`;

const SelectionLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  text-align: center;
  background: white;
  
  padding: 5px;
  font-size: 1.5rem;
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
  border-radius: 15px;
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
    console.log("CLICKE");
  }

  handleToggleClick(event) {
    const isOpen = !this.state.open;
    this.setState({
      open: isOpen
    });
    console.log(this.state.open);
  }

  render() {
    let hoveredSelection = '';
    hoveredSelection = (
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
        <Logo />
        <ToggleShowButton onClick={this.handleToggleClick} />
        <Nav display={this.state.open}>
          <NavItem> <NavLink to="/">Home</NavLink> </NavItem>
          <NavItem> <NavLink to="/">Blog</NavLink> </NavItem>
          <NavItem animateSelection>
            <div onClick={this.handleCompany} style={{fontWeight: 600}}>Company<DropArrow src={downArrow} isOpen={this.state.companySelection}/></div>
            {hoveredSelection}
          </NavItem>
          <NavItem> <NavLink to="/contact">Contact</NavLink> </NavItem>
          <NavLink to="/GetStarted"> <GetStarted>Get started</GetStarted> </NavLink>
        </Nav>
      </Container>
    );
  }
}

export default Navbar;