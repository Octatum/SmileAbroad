import React, { Component } from 'react';
import styled from 'styled-components';

import OpenQuestion from './OpenQuestion';
import MultipleChoice from './MultipleChoice';

const Container = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

class Questionnaire extends Component {
  questions = [
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
      other: true
    }
  ]

  render() {
    let questions = '';
    questions = this.questions.map(data => {
      if (data.type === 'open') {
        return <OpenQuestion 
            question={data.question} 
            key={data.key}/>
      }
      else if (data.type === "multiplechoice") {
        return <MultipleChoice 
            question={data.question} 
            options={data.options} 
            other={data.other} 
            key={data.key} />
      }
    }
    );
    return (
      <Container>
        {questions}
      </Container>
    );
  }
}

export default Questionnaire;