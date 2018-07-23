import React, { Component } from 'react';
import styled from 'styled-components';

import LocationIcon from './assets/Location.svg';
import Internet from './assets/internet.svg';

const Container = styled.form`
  box-sizing: border-box;
  min-height: 70vh;

  display: flex;
  flex-direction: column;

  margin: 0 3em;
  padding: 0 3em;
  padding-bottom: 3em;

  @media(max-width: 520px) {
    margin: 0;
  }
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2em 0;

  position: relative;


  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: 15px 10px;
  }
`;

const GridText = styled.span`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1rem + 1vw);
  font-weight: bold;
  color: black;
  display: inline-block;

  padding: 10px 0;

  @media(max-width: 900px) {
    align-self: flex-start;
  }
`;

const GridInput = styled.input`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  position: relative;
  width: 70%;
  max-width: 800px;


  border: ${props => props.valid ? props.theme.color.lightBlue + ' 2px solid' : 'red 2px solid'};
  border-radius: 15px;
  padding: 10px;
  font-size: calc(1rem + 1vw);

  &:focus{
    outline:none;
  }

  &:hover {
    box-shadow: ${props => props.valid ?
      '2px 2px 5px 1px rgba(0, 198, 219, 0.25), -2px -2px 5px 1px rgba(0, 198, 219, 0.25)' :
      '2px 2px 5px 1px rgba(255, 0, 0, 0.25), -2px -2px 5px 1px rgba(255, 0, 0, 0.25)'};
  }
`;

const MessageInput = GridInput.withComponent('textarea').extend`
  resize: vertical;
  overflow: auto;
  min-height: 300px;
`;

const Submit = styled.input`
  font-size: calc(1rem + 1vw);
  padding: 0.5em;
  border-radius: 10px;
  background: ${props => props.theme.color.lightBlue};

  color: white;
  align-self: flex-end;

  outline: none;
  border: none;
  cursor: pointer;
`;

const Localization = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 900px) {
    margin: 15px 10px;
  }
  
    & span {
    font-size: calc(0.75rem + 1vw);
  }
`;

const SVGicon = styled.img`
  height: calc(3em + 1vw);
  margin-right: 1em;
`;

const EmailWarn = styled.div`
  position: absolute;
  display: block;
  right: 0;
  top: 100%;
  height: 1.5em; 
  width: 70%;
  max-width: 800px;
  z-index: -1;

  opacity: ${props => props.valid ? 0 : 1};
  box-sizing: border-box;
  transition: top 0.5s ease, opacity 0.5s ease;

  background: pink;
  color: red;
  font-size: calc(0.5rem + 1vw);
  border-radius: 10px;
  padding: 0 10px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  ${GridInput}:focus + & {
    top: 50%;
    opacity: 0;
  }

  @media(max-width: 900px) {
    left: 0;
  }
`;


class GetInTouch extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      validEmail: true
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.emailInputValid = this.emailInputValid.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, key) {
    this.setState({
      [key]: event.target.value,
    })
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  emailInputValid() {
    const isValid = this.validateEmail();
    this.setState({
      validEmail: isValid
    })
  }

  validateEmail() {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const re2 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(String(this.state.email));
  }

  submitMessage(event) {
    event.preventDefault();

    console.log(this.validateEmail());

    if (!this.state.name || !this.state.email || !this.state.message || !this.validateEmail()) {
      console.log("NOT VALID MESSAGE");
    }
    else {
      console.log(this.state);
    }
  }

  render() {
    return (
      <Container onSubmit={this.submitMessage}>
        <InputCont>
          <GridText>Name:</GridText>
          <GridInput onChange={(event) => this.handleInputChange(event, 'name')} valid />
        </InputCont>

        <InputCont>
          <GridText>Email:</GridText>
          <GridInput
            onChange={(event) => this.handleInputChange(event, 'email')}
            onBlur={this.emailInputValid}
            valid={this.state.validEmail} />
          <EmailWarn valid={this.state.validEmail}> Please enter a valid e-mail address </EmailWarn>
        </InputCont>

        <InputCont>
          <GridText>Message:</GridText>
          <MessageInput onChange={(event) => this.handleInputChange(event, 'message')} valid />
        </InputCont>

        <Submit type="submit" value="Send" onClick={event => this.submitMessage(event)} disabled={!this.state.validEmail} />

        <Localization>
          <SVGicon src={LocationIcon} />
          <GridText>Av. Eugenio Garza Sada #230, Col. Laealido</GridText>
        </Localization>
        
      </Container>
    )
  }
}

export default GetInTouch;