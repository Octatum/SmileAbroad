import React, { Component } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';

import OpenQuestion from './Questions/OpenQuestion';
import MultipleChoice from './Questions/MultipleChoice';
import MultipleImageQuestion from './Questions/MultipleImageQuestion';

import recreational from './assets/recreational.jpg';
import cultural from './assets/cultural.jpg';
import outdoor from './assets/outdoor.jpg';

// Todo: Refactor MultipleImageQuestion and MultipleChoice into a single component.

const Container = styled.form`
  font-size: calc(0.75rem + 0.5vw);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
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

class Questionnaire extends Component {
  state = {};

  handleChange = event => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' || target.type === 'radio' ? target.checked : target.value;
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
        className={this.props.className}
        onSubmit={this.handleSubmit}
        name="customerData"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="customer-data" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <OpenQuestion
          questionText="What's your name?"
          onChange={this.handleChange}
          name="name"
          required
          autoComplete="name"
        />
        <OpenQuestion
          questionText="What's your email address?"
          onChange={this.handleChange}
          name="email"
          required
          type="email"
          autoComplete="email"
        />
        <MultipleChoice
          questionText="What gender are you?"
          onChange={this.handleChange}
          options={['Male', 'Female']}
          name="gender"
          includeOpenAnswer
        />
        <OpenQuestion
          questionText="Where are you from?"
          onChange={this.handleChange}
          name="location"
          required
        />
        <MultipleChoice
          questionText="Treatment you are looking for:"
          onChange={this.handleChange}
          options={[
            'Implants',
            'Root canal',
            'Veneers',
            'Extractions',
            'Crowns and bridges',
          ]}
          name="treatmentType"
          includeOpenAnswer
        />
        <MultipleChoice
          questionText="Planned travel dates:"
          options={['Within month', 'Within 3 months', 'Later than 3 months']}
          onChange={this.handleChange}
          name="travelDate"
          includeOpenAnswer
          required
        />
        <MultipleChoice
          questionText="From 1 to 10 in a scale of pain, how would you rate your pain tolerance?"
          onChange={this.handleChange}
          options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          name="painTolerance"
          singleAnswer
          horizontal
        />
        <MultipleChoice
          questionText="Do you plan to travel accompannied?"
          onChange={this.handleChange}
          options={['Yes', 'No']}
          name="accompanied"
        />
        <Text>
          We’re almost there, we can provide you with discounted prices for
          attractions, restaurant recommendations based on your interests. Help
          us plan your trip, tell us about your hobbies, food preferences,
          allergies, and other interests.
        </Text>
        <MultipleChoice
          questionText="What is most important for you when booking accommodation?"
          onChange={this.handleChange}
          options={[
            'Proximity to shops',
            'Bar and Terrace',
            'Breakfast included',
            'Swimming pool and recreational areas',
          ]}
          name="hotelCharacteristics"
          includeOpenAnswer
        />
        <MultipleImageQuestion
          questionText="Which type of attractions do you prefer?"
          onChange={this.handleChange}
          options={[
            {
              name: 'Recreational',
              image: recreational,
            },
            {
              name: 'Outdoor',
              image: outdoor,
            },
            {
              name: 'Cultural',
              image: cultural,
            },
          ]}
          name="tourismActivities"
          includeOpenAnswer
        />
        <Text>
          Let us help you plan your trip! We provide you with discounted access
          to different spots around town. Tell us about yourself (hobbies,
          favourite food) so we can find you the best deal.
        </Text>
        <SendButton type="submit">Send</SendButton>
      </Container>
    );
  }
}

export default Questionnaire;
