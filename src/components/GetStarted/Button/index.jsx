import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const GetStarted = styled.div`
  border-radius: 1rem;
  color: white;
  background: ${props => props.theme.color.lightBlue};
  padding: 5px 15px;
  transition: all 0.25s linear;
  border: 2px solid transparent;
  text-align: center;

  :hover {
    background: white;
    border: 2px solid ${props => props.theme.color.lightBlue};
    color: ${props => props.theme.color.lightBlue};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1rem + 0.5vw);
`;

const GetStartedButton = (props) => (
    <NavLink to="/GetStarted" className={props.className} >  
      <GetStarted> Get started </GetStarted> 
    </NavLink>

)

export default GetStartedButton;