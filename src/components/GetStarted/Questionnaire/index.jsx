import React, { Component } from 'react';
import styled from 'styled-components';

import OpenQuestion from './Questions/OpenQuestion';
import MultipleChoice from './Questions/MultipleChoice';
import MultipleImage from './Questions/MultipleImage';
import horno from './assets/horno.jpg';

const Container = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media(max-width: 520px) {
    width: 90%;
  }
`;

const SendButton = styled.button`
  font-size: calc(0.75rem + 1vw);
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
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1rem + 1vw);
  box-sizing: border-box;
  margin: 50px 0;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

let questions = [
  {
    key: 4,
    type: 'multiplechoice',
    questionText: 'What characteristics are you looking for in a hotel?',
    options: [
      'Swimming pool',
      'Breakfast included',
      'Shops',
      'Terrace and bar',
    ],
    other: true,
    manyOptions: true
  },
  {
    key: 5,
    type: 'multipleimage',
    questionText: 'Which type of tourist activities do you like?',
    options: [
      { url: 'http://www.birds.com/wp-content/uploads/home/bird4.jpg', description: 'Outdoor' },
      { url: horno, description: 'Cultural' },
      { url: 'http://www.birds.com/wp-content/uploads/home/bird4.jpg', description: 'Recreational' },
    ],
    other: true
  }
]

class Questionnaire extends Component {
  state = {};

  handleChange = (event) => {
    const {target} = event;
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
  }

  render() {
    let questionsList = questions.map((data, index) => {
      if (data.type === "multiplechoice") {
        return <MultipleChoice
          question={data.question}
          other={data.other}
          key={data.key}
          onChange={this.handleChange} 
          handleMany={data.manyOptions} 
        />
      }
      else if (data.type === 'multipleimage') {
        return <MultipleImage
          question={data.question}
          key={data.key}
          stateKey={data.key}
          onChange={this.handleChange} 
        />
      }

    });
    return (
      <Container onSubmit={this.handleSubmit} data-netlify="true">
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
        <OpenQuestion
          questionText="Where are you from?"
          onChange={this.handleChange}
          name="location"
          required
        />
        <OpenQuestion
          questionText="When are you planning to travel?"
          onChange={this.handleChange}
          name="travelDate"
          required
        />
        <OpenQuestion
          questionText="Briefly describe your dental situation"
          onChange={this.handleChange}
          name="dentalDescription"
          required
        />
        <MultipleChoice
          questionText="What characteristics are you looking for in a hotel?"
          onChange={this.handleChange}
          options={[
            'Swimming Pool',
            'Breakfast included',
            'Shops',
            'Terrace and Bar',
          ]}
          name="hotelCharacteristics"
          includeOpenAnswer
        />
        <Text>
          Let us help you plan your trip!
          We provide you with discounted access to different spots around town.
          Tell us about yourself (hobbies, favourite food) so we can find you the best deal.
        </Text>
        <SendButton type="submit">Send</SendButton>
      </Container>
    );
  }
}

export default Questionnaire;
