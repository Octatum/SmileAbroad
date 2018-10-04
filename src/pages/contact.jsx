import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { device } from '../utils/device';
import GetInTouch from '../components/GetInTouch';
import AppLayout from '../components/AppLayout';

const Container = styled.div`
  font-size: calc(1.5rem + 0.75vw);
`;

const TitleCont = styled.div`
  ${device.tablet} {
    width: 90%;
    margin: 50px auto;
  }
`;

const Title = styled.p`
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 80%;
  text-align: center;
  margin: auto;

  ${device.tablet} {
    width: 100%;
  }
`;
const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const SubText = styled.p`
  font-size: 0.75em;
  color: black;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 80%;
  text-align: center;
  margin: auto;
  margin: 2em auto;

  ${device.tablet} {
    width: 100%;
  }
`;

const Contact = () => (
  <AppLayout>
    <Container>
      <Helmet title="Contact Us" />
      <TitleCont>
        <Title>
          Get in <BlueTitle>touch</BlueTitle> with us
        </Title>
        <SubText>
          We are more than happy to help, let us know what we can do for you.
        </SubText>
      </TitleCont>
      <GetInTouch />
    </Container>
  </AppLayout>
);

export default Contact;
