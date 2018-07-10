import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import downArrow from './../../../assets/downArrow.svg';

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template: minmax(2.5vh, auto) minmax(2.5vh, 60px) / 3fr minmax(auto, 0.5fr) 7fr;
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
  padding: 20px;
  justify-content: space-evenly;
`;

const NavItem = styled.div`
  display: flex;
  flex: 0 1 auto;
  font-family: sans-serif;
  font-size: 3rem;
  position: relative;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  text-align: center;
`;

const CompanyHover = styled.div`
  width: 80%;
  position: absolute;
  top: 2.5rem;
  left: 1.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); 
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  background-color: white;
`;

const DropArrow = styled.img`
  width: 10px;
  position: absolute;
  top: 50%;
`;

const GetStarted = NavItem.extend`
  border-radius: 10px;
  color: white;
  background: #00C6DB;
  padding: 5px 15px;
`;

const SelectionLink = NavLink.extend`
  padding: 5px;
  font-size: 1.5rem;
  flex: 0 1 auto;

  &:hover {
    background-color: #00C6DB;
    color: white;
  }
`;



class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  mouseEnterHandler() {
    this.setState({ hovered: true });
  }

  mouseLeaveHandler() {
    this.setState({ hovered: false });
  }

  render() {
    let hoveredSelection = '';
    if (this.state.hovered) {
      hoveredSelection = (
        <CompanyHover>
          <SelectionLink to="/">Opcion1</SelectionLink>
          <SelectionLink to="/">Opcion2</SelectionLink>
          <SelectionLink to="/">Opcion3</SelectionLink>
          <SelectionLink to="/">Opcion4</SelectionLink>
        </CompanyHover>
      );
    }

    return (
      <Container>
        <Logo />
        <Nav>
          <NavItem> <NavLink to="/">Home</NavLink> </NavItem>
          <NavItem> <NavLink to="/">Blog</NavLink> </NavItem>
          <NavItem
            onMouseEnter={this.mouseEnterHandler}
            onMouseLeave={this.mouseLeaveHandler}>
            <NavLink to="/">Company<DropArrow src={downArrow} /></NavLink>
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