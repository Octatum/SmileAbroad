import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  display: grid;
  grid-template: 5fr 3fr / 6fr 1fr 7fr;
  grid-template-areas: 
    "intro line img"
    "desc desc desc";
  min-height: 100vh;
  box-sizing: border-box;
  margin: 30px 0;
`;

const Intro = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 8em;
`;

const Divisor = styled.div`
  grid-area: line;
  border-radius: 250px;
  width: 5px;
  height: 50%;
  margin: auto;
  background: #00C6DB;
`;

const ImageCont = styled.div`
  grid-area: img;
  width: 100%;
  height: 100%;
  background: grey;
`;
const IMG = styled.img`
  height: 100%; 
`;

const Text = styled.p`
  font-size: 2.5rem;
  text-align: right;
  font-family: sans-serif;
`;
const BlueText = Text.withComponent('span').extend`
  color: #00C6DB;
`;

const Desc = Text.extend`
  grid-area: desc;
  text-align: center;
  margin: auto;
  width: 70%;
`;

const QuestionnaireIntro = () => (
  <IntroContainer>
    <Intro>
      <Text>
        This questionnaire will help us prepare your free quote. After you submit your responses a team member from
        <BlueText> NeighborHealth</BlueText> will contact you offering you a personal plan including dentis profile, hotel and tourist
        recommendations and benefits you get using our <BlueText>NeighborHealth</BlueText> services.
      </Text>
      <Text>
        We are very excited to welcome you to <span style={{ fontWeight: 'bold' }}>Mexico</span>!
      </Text>
    </Intro>
    <ImageCont> <IMG /> </ImageCont>
    <Desc>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummmy text ever since the 1500,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </Desc>
    <Divisor />

  </IntroContainer>
);

export default QuestionnaireIntro;