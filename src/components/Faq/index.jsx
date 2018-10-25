import React from 'react';
import styled from 'styled-components/macro';

import Question from './Question';

const Container = styled.div`
  padding: 2em 3.5em;
  width: 60%;
  display: flex;
  flex-direction: column;

  font-size: calc(0.75rem + 0.5vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  background: #efefef;

  ul {
    list-style-position: inside;
  }
`;

const IndivQuestion = styled(Question)`
  margin-bottom: 2em;
`;

const Faq = props => {
  const questions = props.allQuestions.map(data => {
    return (
      <IndivQuestion
        key={data.node.frontmatter.title}
        question={data.node.frontmatter.question}
        answer={data.node.rawMarkdownBody}
      />
    );
  });

  return <Container className={props.className}>{questions}</Container>;
};

export default Faq;
