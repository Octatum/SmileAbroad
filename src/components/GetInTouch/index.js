import React, { Component, isValidElement } from 'react';
import styled from 'styled-components';
import { navigateTo } from "gatsby-link";

import {device} from './../../utils/device';
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

  ${device.mobile} {
    margin: 0;
    padding: 10px;
  }

  &, & > div, span, p, input, textarea {
    font-size: calc(1rem + 1vw);
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  }
`;

const InputCont = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.75em 0;

  position: relative;

  ${device.tablet} {
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


  border: ${props => `${props.theme.color.lightBlue} 2px solid` };
  border-radius: 15px;
  padding: 10px;

  &:focus{
    outline:none;
  }

  &:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 198, 219, 0.25);
  }
`;

const MessageInput = GridInput.withComponent('textarea').extend`
  resize: vertical;
  overflow: auto;
  min-height: 10em;
`;

const Submit = styled.button`
  margin-top: 0.5em;
  font-size: 2rem;
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

  ${device.tablet} {
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

  ${device.tablet} {
    left: 0;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class GetInTouch extends Component {
  state = {
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const self = this;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...self.state
      })
    })
    .then(() => {
      alert("Your message was sent!");
      navigateTo(form.getAttribute("action"))
    })
    .catch(error => alert(error));
  };

  render() {
    return (
      <Container 
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >

        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <InputCont>
          <GridText>Name:</GridText>
          <GridInput 
            name="name"
            onChange={this.handleChange} 
            autoComplete="name" 
          />
        </InputCont>

        <InputCont>
          <GridText>Email:</GridText>
          <GridInput
            name="email"
            onChange={this.handleChange} 
            type="email"
            autoComplete="email" 
          />
        </InputCont>

        <InputCont>
          <GridText>Message:</GridText>
          <MessageInput 
            name="message"
            onChange={this.handleChange} 
          />
        </InputCont>

        <Submit type="submit">Send</Submit>

        <Localization>
          <SVGicon src={LocationIcon} />
          <GridText>Av. Eugenio Garza Sada #230, Col. Laealido</GridText>
        </Localization>
        {/* 
        <Localization>
          <SVGicon src={Internet} />
          <GridText>www.neighbor.health</GridText>
        </Localization>
        */}

      </Container>
    )
  }
}

export default GetInTouch;