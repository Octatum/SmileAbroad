import React from 'react';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

const Container = styled.label``;

const Pregunta = styled.span`
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.25em;

  cursor: pointer;
  border: 1px transparent dotted;
`;

const Respuesta = styled(ReactMarkdown)`
  font-size: 0;
  margin: 0;
  opacity: 0;
  padding: 0;

  /* fade out, then shrink */
  transition: opacity 0.25s, margin 0.5s 0.25s, font-size 0.5s 0.25s,
    padding 0.5s 0.25s;
`;

const Arrow = styled.span`
  float: right;
  margin-left: 0.5em;
  transform: rotate(90deg);
  transition: transform 0.25s ease-out;
`;

const Checkbox = styled.input`
  position: absolute;
  left: -9999px;

  :checked ~ ${Arrow} {
    transform: rotate(270deg);
  }

  &:focus ~ ${Pregunta} {
    border-color: grey;
  }

  :checked ~ ${Respuesta} {
    font-size: 1em;
    opacity: 1;
    height: auto;
    padding: 5px 0;

    /* grow, then fade in */
    transition: margin 0.25s, padding 0.25s, font-size 0.25s, opacity 0.5s 0.25s;
  }
`;

const Question = ({ question, answer, className }) => {
  return (
    <Container className={className}>
      <Checkbox type="checkbox" />
      <Pregunta>{question}</Pregunta>
      <Arrow>&gt;</Arrow>
      <Respuesta source={answer} />
    </Container>
  );
};

export default Question;
