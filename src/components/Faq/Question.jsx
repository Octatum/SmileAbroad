import React from 'react';
import styled from 'styled-components/macro';
import ReactMarkdown from 'react-markdown';

import arrow from './assets/arrow.svg';

const Container = styled.label`
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  font-weight: bold;
  margin: 0.5em 0;
  font-size: 1.25em;

  cursor: pointer;
  border: 1px transparent dotted;
`;

const Answer = styled(ReactMarkdown)`
  font-size: 0;
  margin: 0;
  opacity: 0;
  padding: 0;

  /* fade out, then shrink */
  transition: opacity 0.25s, margin 0.5s 0.25s, font-size 0.5s 0.25s,
    padding 0.5s 0.25s;

  strong {
    color: ${({ theme }) => theme.color.lightBlue};
  }
`;

const Checkbox = styled.input`
  display: none;

  :checked ~ div svg {
    transform: rotate(0.5turn);
  }

  &:focus ~ ${Question} {
    border-color: grey;
  }

  :checked ~ ${Answer} {
    font-size: 1em;
    opacity: 1;
    padding: 5px 0;

    /* grow, then fade in */
    transition: margin 0.25s, padding 0.25s, font-size 0.25s, opacity 0.5s 0.25s;
  }
`;

const QuestionHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowContainer = styled.img`
  transition: transform 0.25s ease-out;
  transform: rotate(0turn);
  width: 1em;
  display: block;
`;

const QuestionContainer = ({ question, answer, className }) => {
  return (
    <Container className={className}>
      <Checkbox type="checkbox" />
      <QuestionHeaderTitle>
        <Question>{question}</Question>
        <ArrowContainer src={arrow} />
      </QuestionHeaderTitle>
      <Answer source={answer} />
    </Container>
  );
};

export default QuestionContainer;
