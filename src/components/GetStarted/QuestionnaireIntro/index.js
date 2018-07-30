import React from 'react';
import styled from 'styled-components';

import patient from './assets/patient.jpg';

const Container = styled.div`
  margin: 50px 0;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 50px 0 50px 20px;

  & div {
    margin-left: 30px;
  }

  @media(max-width: 520px) {
    flex-direction: column;
    margin: 15px 0;

    & div {
      margin: 15px 0;
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5vw;

  width: 100%;

  @media(max-width: 520px) {
    order: 2;
    padding: 0;
    width: 75%;
    margin-bottom: 0 !important;
  }

`;

const Divisor = styled.div`
  border-radius: 250px;
  width: 15px;
  height: 150px;
  margin: auto;
  background: ${props => props.theme.color.lightBlue};

  @media(max-width: 520px) {
    width: 30%;
    height: 5px;
    order: 3;
  }
`;

const ImageCont = styled.div`
  width: 100%;
  overflow: hidden;

  @media(max-width: 520px) {
    order: 1;
  }
`;

const IMG = styled.img`
  width: 100%;
`;

const Text = styled.p`
  font-size: calc(0.75rem + 1vw);
  text-align: right;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  margin-bottom: 15px;

  @media(max-width: 520px) {
    text-align: center;
  }
`;
const BlueText = Text.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const Desc = Text.extend`
  text-align: center;
  margin: auto;
  width: 70%;

  @media(max-width: 520px) {
    width: 85%;
  }
`;

const QuestionnaireIntro = () => (
  <Container>
    <IntroContainer>
      <Intro>
        <Text>
          This questionnaire will help us prepare your free quote. After you submit your responses a team member from
        <BlueText> NeighborHealth</BlueText> will contact you offering you a personal plan including dentis profile, hotel and tourist
        recommendations and benefits you get using our <BlueText>NeighborHealth</BlueText> services.
        </Text>
        <Text>
          We are very excited to welcome you to <span style={{ fontWeight: '600' }}>Mexico</span>!
        </Text>
      </Intro>
      <Divisor />
      <ImageCont> <IMG src={patient}/> </ImageCont>
    </IntroContainer>
  </Container>
);

export default QuestionnaireIntro;