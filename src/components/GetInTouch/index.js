import React, { Component } from 'react';
import styled from 'styled-components';

import LocationIcon from './../../../assets/Location.svg';
import Internet from './../../../assets/Internet.svg';

const Container = styled.form`
  margin: 0 10% 100px 100px;
  box-sizing: border-box;
  min-height: 70vh;

  display: flex;
  flex-direction: column;
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3em 0;
  padding-right: 5%;

  @media(max-width: 1450px) {
    flex-direction: column;
  }
`;

const GridText = styled.span`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 2em;
  color: black;
  display: inline-block;
  margin-left: 2.5em;
`;

const GridInput = styled.input`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  height: 1.75em;
  position: relative;
  width: 800px;


  border: ${props => props.valid ?  props.theme.color.lightBlue + ' 2px solid' : 'red 2px solid'};
  border-radius: 15px;
  padding: 10px;
  font-size: 2rem;

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
  font-size: 2rem;
  padding: 0.5em;
  border-radius: 10px;
  margin-right: 5%;
  background: ${props => props.theme.color.lightBlue};

  color: white;
  align-self: flex-end;

  outline: none;
  border: none;
  cursor: pointer;
`;

const Localization = styled.div`
  padding: 20px 0;
  margin-left: 7em;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const SVGicon = styled.img`
  height: 100px;
`;

const EmailWarn = styled.div`
  position: absolute;
  display: block;
  left: 0;
  top: 100%;
  height: 50%; 
  width: 100%;
  z-index: -1;

  opacity: ${props => props.valid ? 0 : 1};
  box-sizing: border-box;
  transition: top 0.5s ease, opacity 0.5s ease;

  background: pink;
  color: red;
  font-size: 1.3rem;
  line-height: 2.4rem;
  border-radius: 10px;
  padding: 0 10px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  ${GridInput}:focus + & {
    top: 50%;
    opacity: 0;
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
          <div style={{ position: 'relative' }}>
            <GridInput
              onChange={(event) => this.handleInputChange(event, 'email')}
              onBlur={this.emailInputValid}
              valid={this.state.validEmail} />
            <EmailWarn valid={this.state.validEmail}> Please enter a valid e-mail address </EmailWarn>
          </div>
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

        <Localization>
          <SVGicon src={Internet} />
          <GridText>www.neighbor.health</GridText>
        </Localization>

      </Container>
    )
  }
}

export default GetInTouch;