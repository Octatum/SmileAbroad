import React, { Component } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';

import OpenQuestion from './../GetStarted/Questionnaire/Questions/OpenQuestion';

import { device } from './../../utils/device';

// Todo: Refactor MultipleImageQuestion and MultipleChoice into a single component.

const Container = styled.form`
  font-size: calc(0.75rem + 0.5vw);

  width: 70%;
  margin: 0 auto;
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  ${device.mobile} {
    width: 90%;
  }
`;

const SendButton = styled.button`
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  text-transform: uppercase;
  padding: 0.5em 1em;
  flex: 0 1 auto;
  align-self: flex-end;
  background: ${props => props.theme.color.lightBlue};
  color: white;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 1.25em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  box-sizing: border-box;
  margin: 50px 0;

  text-align: justify;
  text-align-last: center;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class Feedback extends Component {
  state = {};

  handleChange = event => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        alert(
          'Thanks, we will contact you soon. Less than 48 hours, we promise'
        );
        navigateTo(form.getAttribute('action'));
      })
      .catch(error => alert(error));
  };

  render() {
    return (
      <Container
        onSubmit={this.handleSubmit}
        name="customerReview"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="customer-review" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <OpenQuestion
          questionText="Does this specialist meet your expectations?"
          onChange={this.handleChange}
          name="expectations"
          required
        />
        <OpenQuestion
          questionText="Does the plan fit your expected budget?"
          onChange={this.handleChange}
          name="budget"
          required
        />
        <OpenQuestion
          questionText="Which accommodation option best suits your needs?"
          onChange={this.handleChange}
          name="accommodationOptions"
          required
        />
        <OpenQuestion
          questionText="Are there any modifications you’d like to make to your plan?"
          onChange={this.handleChange}
          name="modifications"
          required
        />
        <OpenQuestion
          questionText="Would you like to personally contact the specialist?"
          onChange={this.handleChange}
          name="specialistContact"
          required
        />
        <Text>WE LOOK FORWARD TO WELCOMING YOU TO BEAUTIFUL MONTERREY</Text>
        <SendButton type="submit">Send</SendButton>
      </Container>
    );
  }
}

export default Feedback;
