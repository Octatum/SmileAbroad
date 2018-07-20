import styled from "styled-components";

const Button = component => styled(component)`
  flex: 0 1 auto;
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: 2.2rem;
  border-radius: 10px;
  padding: 10px 2em;
  margin: 0 50px 20px 50px;

  color: black;
  border: 3px solid black;

  transition: box-shadow 0.25s linear;

  :hover{
    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.3);
  }
`;

export default Button;