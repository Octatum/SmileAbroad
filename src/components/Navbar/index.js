import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import downArrow from './../../../assets/downArrow.svg';

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template: minmax(2.5vh, auto) minmax(2.5vh, 60px) / 3fr minmax(auto, 0.5fr) 6fr;
  grid-template-areas: 
    "Logo . nav"
    "Logo . .";
  margin: 30px;
`;

const Logo = styled.img`
  grid-area: Logo;
  width: 100%;
  height: 100%;
  min-width: 150px;
  background-color: grey;
`;

const Nav = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

const NavItem = styled.div`
  display: flex;
  flex: 0 1 auto;
  font-family: sans-serif;
  font-size: 2rem;
  position: relative;
  padding: 0 3%;

  &:hover ${NavLink}::before {
    width: ${props => props.animateSelection ? 'initial' : '100%'};
  }
  `;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  text-align: center;
  
  &::before {
    content: "";
    width: 0%;
    border-bottom: 3px solid #00C6DB;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 1s ease-out;
  }
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  position: absolute;
  display: block;  
  top: 100%;
  left: 0;

  padding-bottom: 10px;
  overflow: hidden;
`;

const CompanyHover = styled.div`
  width: 80%;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); 
  
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  
  transform: translate(0, -110%);
  transition: transform 1s linear, opacity 1s linear;
  opacity: 0;
  
  ${NavItem}:hover ${PlaceholderContainer} & {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const DropArrow = styled.img`
  width: 10px;
  position: absolute;
  top: 50%;
`;

const SelectionLink = NavLink.extend`
  padding: 5px;
  font-size: 1.5rem;
  flex: 0 1 auto;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: #00C6DB;
    color: white;
  }
`;

const GetStarted = NavItem.extend`
  border-radius: 15px;
  color: white;
  background: #00C6DB;
  padding: 5px 15px;
`;


const Navbar = () => {
  let hoveredSelection = '';

  hoveredSelection = (
    <PlaceholderContainer>
      <CompanyHover>
        <SelectionLink to="/">opcion1</SelectionLink>
        <SelectionLink to="/">Opcion2</SelectionLink>
        <SelectionLink to="/">Opcion3</SelectionLink>
        <SelectionLink to="/">Opcion4</SelectionLink>
      </CompanyHover>
    </PlaceholderContainer>
  );


  return (
    <Container>
      <Logo />
      <Nav>
        <NavItem> <NavLink to="/">Home</NavLink> </NavItem>
        <NavItem> <NavLink to="/">Blog</NavLink> </NavItem>
        <NavItem animateSelection>
          <NavLink to="/">Company<DropArrow src={downArrow} /></NavLink>
          {hoveredSelection}
        </NavItem>
        <NavItem> <NavLink to="/contact">Contact</NavLink> </NavItem>
        <NavLink to="/GetStarted"> <GetStarted>Get started</GetStarted> </NavLink>
      </Nav>
    </Container>
  );
}


export default Navbar;