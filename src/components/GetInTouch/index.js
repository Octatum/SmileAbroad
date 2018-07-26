import React, { Component, isValidElement } from 'react';
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
    padding: 10px;
  }

  &, & > div, span, p, input, textarea {
    font-size: calc(1rem + 1vw);
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  }
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0;

  position: relative;

  @media(max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 2em 10px;
  }
`;

const GridText = styled.span`
  font-weight: bold;
  color: black;
  display: inline-block;

  padding: 10px 0;
`;

const GridInput = styled.input`
  
  position: relative;
  width: 70%;
  max-width: 800px;


  border: ${props => props.valid ? props.theme.color.lightBlue + ' 2px solid' : 'red 2px solid'};
  border-radius: 15px;
  padding: 10px;

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
  min-height: 10em;
`;

const Submit = styled.input`
  margin-top: 1.5em;
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

  & > span {
    font-size: 0.80em;
  }
`;

const SVGicon = styled.img`
  height: 3em;
  margin-right: 1em;
`;

const Warning = styled.div`
  position: absolute;
  display: block;
  right: 0;
  top: 100%;
  z-index: -1;
  width: 70%;
  max-width: 800px;

  opacity: ${props => props.valid ? 0 : 1};
  transition: transform 0.5s ease, opacity 0.5s ease;

  background: pink;
  color: red;
  border-radius: 10px;
  padding: 0 0.75em;
  
  font-size: 0.75em;

  ${GridInput}:focus + &,
  ${MessageInput}:focus + & {
    transform: translateY(-100%);
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
      validEmail: true,
      enteredName: true,
      enteredMessage: true
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.emailInputValid = this.emailInputValid.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validInput = this.validInput.bind(this);
  }

  handleInputChange(event, key) {
    this.setState({
      [key]: event.target.value,
    })
  }

  emailInputValid() {
    const isValid = this.validateEmail();
    this.setState({
      validEmail: isValid
    })
  }

  validateEmail() {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    // const re2 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(String(this.state.email));
  }

  validInput(event, tag) {
    const isValue = event.target.value !== "";
    if(tag === 'name') {
      this.setState({
        enteredName: isValue
      })
    }
    else {
      this.setState({
        enteredMessage: isValue
      })
    }
  }

  submitMessage(event) {
    event.preventDefault();

    if (!this.state.name || !this.state.email || !this.state.message || !this.validateEmail()) {
      console.log("NOT VALID MESSAGE");
      alert('please fill out the form');
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
          <GridInput 
            onChange={(event) => this.handleInputChange(event, 'name')} 
            onBlur={(event) => this.validInput(event, 'name')}
            valid={this.state.enteredName}
            autoComplete="name" />
          <Warning valid={this.state.enteredName}> Please write your name here </Warning>  
        </InputCont>

        <InputCont>
          <GridText>Email:</GridText>
          <GridInput
            onChange={(event) => this.handleInputChange(event, 'email')}
            onBlur={this.emailInputValid}
            valid={this.state.validEmail} 
            autoComplete="email" />
          <Warning valid={this.state.validEmail}> Please enter a valid e-mail address </Warning>
        </InputCont>

        <InputCont>
          <GridText>Message:</GridText>
          <MessageInput 
            onChange={(event) => this.handleInputChange(event, 'message')} 
            onBlur={(event) => this.validInput(event, 'message')}
            valid={this.state.enteredMessage} />
            <Warning valid={this.state.enteredMessage}> Please enter a message </Warning>
        </InputCont>

        <Submit type="submit" value="Send" onClick={event => this.submitMessage(event)} disabled={!this.state.validEmail} />

        <Localization>
          <SVGicon src={LocationIcon} />
          <GridText>Av. Eugenio Garza Sada #230, Col. Laealido</GridText>
        </Localization>

        <Localization>
          <SVGicon src={Internet} />
          <GridText>www.neighbor.health</GridText>
        </Localization>

      </Container>
    )
  }
}

export default GetInTouch;