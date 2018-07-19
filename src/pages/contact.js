import React from 'react'
import styled from 'styled-components';

import Navbar from './../components/Navbar';
import GetInTouch from './../components/GetInTouch';


const Container = styled.div`
`;

const TitleCont = styled.div`
  margin: 150px 0;
`;

const Title = styled.p`
  font-size: 4rem;
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 100%;
  text-align: center;
`;
const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const SubText = styled.p`
  font-size: 2rem;
  color: black;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

const Contact = () => (
  <Container>
    <Navbar />
    <TitleCont>
      <Title>Get in <BlueTitle>touch</BlueTitle> with us</Title>
      <SubText>We are more than happy to help, let us know what we can do for you.</SubText>
    </TitleCont>
    
    <GetInTouch />
  </Container>
)

export default Contact;
