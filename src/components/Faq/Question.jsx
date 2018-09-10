import React from 'react';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

const Container = styled.div`

`;

const Pregunta = styled.p`
  font-weight: bold;
  margin-bottom: 1.5em;
  font-size: 1.25em;
`;

const Respuesta = styled(ReactMarkdown)`
`;

const Question = ({
  question,
  answer,
  className
}) => {
  console.log(question);
  return (
    <Container className={className}>
      <Pregunta>{question}</Pregunta>
      <Respuesta source={answer} />
    </Container>
  );
}

export default Question;