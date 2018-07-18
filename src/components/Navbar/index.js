import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import downArrow from './../../../assets/downArrow.svg';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 30px;

  @media(max-width: 1300px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
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
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  @media(max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex: 0 1 auto;
  font-family: sans-serif;
  font-size: 2rem;
  position: relative;
  margin-right: calc(2em - 1.5vw);
  

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

  &::before {
    content: "";
    width: 0%;
    border-bottom: 3px solid #00C6DB;
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
  top: 100%;
  left: 0;

  padding-bottom: 10px;
  overflow: hidden;
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

  ${NavItem}:hover > ${PlaceholderContainer} > & {
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
`;

const DropArrow = styled.img`
  width: 10px;
  position: absolute;
  top: 50%;
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
    background-color: #00C6DB;
    color: white;
  }
`;

const GetStarted = NavItem.extend`
  border-radius: 15px;
  color: white;
  background: #00C6DB;
  padding: 5px 15px;

  transition: all 0.25s linear;
  border: 2px solid transparent;

  :hover {
    background: white;
    border: 2px solid #00C6DB;
    color: #00C6DB;
  }

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
        <ShadowBox />
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