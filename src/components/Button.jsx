import styled from "styled-components";

const Button = component => styled(component)`
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  font-weight: 600;
  font-size: calc(1rem + 0.75vw);
  border-radius: 10px;
  text-align: center;

  padding: 10px 1em;
  position: relative;

  color: black;
  
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
  &:hover ::before {
    width: ${props => props.animateSelection ? 'initial' : '100%'};
    left: 0;
  }
`;

export default Button;