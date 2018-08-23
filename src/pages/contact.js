import React from 'react'
import styled from 'styled-components';
import Helmet from 'react-helmet';

import GetInTouch from './../components/GetInTouch';

const Container = styled.div`
`;

const TitleCont = styled.div`
  @media(max-width: 800px) {
    width: 90%;
    margin: 50px auto; 
  }
`;

const Title = styled.p`
  font-size: calc(2rem + 1vw);
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 80%;
  text-align: center;
  margin: auto;

  @media(max-width: 800px) {
    width: 100%;
  }
`;
const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const SubText = styled.p`
  font-size: calc(1.25rem + 1vw);
  color: black;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 80%;
  text-align: center;
  margin: auto;
  margin-top: 2em;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

const Contact = () => (
  <Container>
    <Helmet title="Contact Us" />
    <TitleCont>
      <Title>Get in <BlueTitle>touch</BlueTitle> with us</Title>
      <SubText>We are more than happy to help, let us know what we can do for you.</SubText>
    </TitleCont>
    <GetInTouch />
  </Container>
)

export default Contact;
