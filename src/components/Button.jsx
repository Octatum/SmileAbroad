import styled from "styled-components";

const Button = component => styled(component)`
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  font-weight: 600;
  font-size: calc(1rem + 0.75vw);
  border-radius: 10px;

  padding: 10px 1em;

  color: black;
  border: 3px solid black;

  transition: box-shadow 0.25s linear;
  
  :hover{
    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.3);
  }
`;

export default Button;