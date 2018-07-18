import React, { Component } from 'react';
import styled from 'styled-components';

import OpenQuestion from './../Questions/OpenQuestion';
import MultipleChoice from './../Questions/MultipleChoice';
import MultipleImage from './../Questions/MultipleImage';

const Container = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const SendButton = styled.button`
  font-size: 2rem;
  font-family: sans-serif;
  text-transform: uppercase;
  padding: 0.5em 2em;

  flex: 0 1 auto;
  align-self: flex-end;

  background: #00C6DB;
  color: white;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const Text = styled.p`
  font-family: sans-serif;
  font-size: 2.5rem;
  box-sizing: border-box;
  margin: 50px 0;
`;

const questions = [
  {
    key: 1,
    type: 'open',
    question: 'Where are you from?'
  },
  {
    key: 2,
    type: 'multiplechoice',
    question: 'When are you planning to travel?',
    options: [
      'Within a month',
      'Within 3 months',
      'Later than 3 months'
    ],
    other: true,
    manyOptions: false
  },
  {
    key: 3,
    type: 'open',
    question: 'If not, we can still help. Please describe your dental situation generally'
  },
  {
    key: 4,
    type: 'multiplechoice',
    question: 'What characteristics are you looking for in a hotel?',
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
    question: 'Which type of tourist activities do you like?',
    options: [
      { url: 'http://www.birds.com/wp-content/uploads/home/bird4.jpg', description: 'smiley' },
      { url: 'http://www.birds.com/wp-content/uploads/home/bird4.jpg', description: 'smiley2' },
      { url: 'http://www.birds.com/wp-content/uploads/home/bird4.jpg', description: 'smiley3' },
    ],
    other: true
  }
]

class Questionnaire extends Component {
  constructor() {
    super();

    this.state = {
      1: '',
      2: '',
      3: '',
      4: [false, false, false, false, false],
      5: [false, false, false, false]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.handleManyOptions = this.handleManyOptions.bind(this);
  }

  handleInputChange(value, key) {
    let prevState = this.state[[key]];
    if (prevState != value) {
      this.setState({
        [key]: value,
      });
    }
  }

  handleManyOptions(value, key, index) {
    let newAnswer = [...this.state[[key]]];
    newAnswer[index] = value;
    this.handleInputChange(newAnswer, key)
  }

  submitInfo(event) {
    event.preventDefault();
    // array that takes the state t/f and replaces with values of 'questions'
    let multipleImageResponse = [...this.state[5]];
    multipleImageResponse = this.state[5].map((data, index) => {
      // if true and not the last question
      if (data && index != this.state[5].length - 1) {
        return questions[4].options[index];
      }
      // if last question
      else if (data !== false && index === this.state[5].length - 1) {
        return data;
      }
      // if false
      else {
        return false;
      }
    })
    const finalResponse = [
      this.state[1],
      this.state[2],
      this.state[3],
      this.state[4],
      multipleImageResponse
    ];

    console.log(finalResponse);
  }

  /// TODO :: change 5 for index+1

  render() {
    let questionsList = '';
    questionsList = questions.map(data => {
      if (data.type === 'open') {
        return <OpenQuestion
          question={data.question}
          key={data.key}
          stateKey={data.key}
          handleChange={this.handleInputChange}
        />
      }
      else if (data.type === "multiplechoice") {
        return <MultipleChoice
          question={data.question}
          options={data.options}
          other={data.other}
          key={data.key}
          stateKey={data.key}
          handleChange={data.manyOptions ? this.handleManyOptions : this.handleInputChange} 
          handleMany={data.manyOptions} />
      }
      else if (data.type === 'multipleimage') {
        return <MultipleImage
          question={data.question}
          options={data.options}
          selectedOptions={[...this.state[5]]}
          other={data.other}
          key={data.key}
          stateKey={data.key}
          handleChange={this.handleInputChange} />
      }

    });
    return (
      <Container onSubmit={this.submitInfo}>
        {questionsList}
        <Text>
          Let us help you plan your trip!
          We provide you with discounted access to different spots around town.
          Tell us about yourself (hobbies, favourite food) so we can find you the best deal.
        </Text>
        <SendButton onClick={this.submitInfo}>Send</SendButton>
      </Container>
    );
  }
}

export default Questionnaire;
