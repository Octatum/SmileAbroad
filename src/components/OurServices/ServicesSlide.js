import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 3.5rem;
  font-family: sans-serif;
`;

const Separator = styled.hr`
  background: #00C6DB;
  height: 5px;
  width: 15%;
  border-radius: 10px;
  border: none;
`;

const ServiceSlide = (props) => (
  <Container className={props.className}>
    <Title>Affordable <br /> Health Care</Title>
    <Separator />
  </Container>  
);

export default ServiceSlide;