import React from 'react';
import styled from 'styled-components';

// Container of entire component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

// Component Title
const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  align-self: flex-start;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

`;
const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

// Grid container 
const InfoContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  margin: 50px 0;
  padding: 20px 0;
  display: grid;
  grid-template: 2fr 1fr 15px 2fr 1fr 1fr / repeat(4, 1fr);
  grid-template-areas:
    "img1 img2 img3 img4"
    "title1 title2 title3 title4"
    "span1 span2 span3 span4"
    "desc1 desc2 desc3 desc4"
    "track track track track"
    "companies companies companies companies";
  grid-row-gap: 20px;
`;

// img container to maintain sizing
const IMG = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const ImageCont1 = IMG.extend`
  grid-area: img1;
`;
const ImageCont2 = IMG.extend`
  grid-area: img2;
`;
const ImageCont3 = IMG.extend`
  grid-area: img3;
`;
const ImageCont4 = IMG.extend`
  grid-area: img4;
`;
// img object
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: grey;
`;

// Subtitle (title of service) container
const SubCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Sub1 = SubCont.extend`
  grid-area: title1;
`;
const Sub2 = SubCont.extend`
  grid-area: title2;
`;
const Sub3 = SubCont.extend`
  grid-area: title3;
`;
const Sub4 = SubCont.extend`
  grid-area: title4;
`;
// Subtitle
const Subtitle = styled.p`
  color: black;
  font-size: 2rem;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 80%;
  text-align: center;
`;

// Service Description Container
const ContDesc = styled.div`
  display: flex;
  justify-content: center;
`;
const Desc1 = ContDesc.extend`
  grid-area: desc1;
`;
const Desc2 = ContDesc.extend`
  grid-area: desc2;
`;
const Desc3 = ContDesc.extend`
  grid-area: desc3;
`;
const Desc4 = ContDesc.extend`
  grid-area: desc4;
`;
// Description object
const Description = styled.p`
  font-size: 1.5rem;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  text-align: center;
  width: 70%;
`;

// Separator
const Separator = styled.hr`
  height: 75%;
  background: #00C6DB;
  width: 25%;
  margin: auto auto;
  border: none;
  border-radius: 10px;
`;
const Sep1 = Separator.extend`
  grid-area: span1;
`;
const Sep2 = Separator.extend`
  grid-area: span2;
`;
const Sep3 = Separator.extend`
  grid-area: span3;
`;
const Sep4 = Separator.extend`
  grid-area: span4;
`;

const Track = Subtitle.extend`
  grid-area: track;
  margin: auto;
  width: 100%;
`;
const BlueTrack = Track.withComponent('span').extend`
  color: #00C6Db;
`;

const OtherComps = styled.div`
  width: 100%;
  height: 100%;
  grid-area: companies;
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
`;
const CompImg = Image.extend`
  width: 10%;
  height: 100%;
`;

const AddedValue = () => (
  <Container>
    <Title>We got you <BlueTitle>cover</BlueTitle></Title>
    <InfoContainer>
      <ImageCont1> <Image /> </ImageCont1>
      <ImageCont2> <Image /> </ImageCont2>
      <ImageCont3> <Image /> </ImageCont3>
      <ImageCont4> <Image /> </ImageCont4>

      <Sub1> <Subtitle>We are here for you</Subtitle> </Sub1>
      <Sep1 />
      <Desc1> <Description>Ready to help you 24/7 </Description></Desc1>

      <Sub2> <Subtitle>Making your life easier</Subtitle> </Sub2>
      <Sep2 />
      <Desc2> <Description>We give you peace of mind by making your accomodation reservations, setting up tourist activities, your dental appointments, and transportation to and fro the clinic and the airport!</Description> </Desc2>

      <Sub3> <Subtitle>Get a FREE ESTIMATE from a certified specialist</Subtitle> </Sub3>
      <Sep3 />
      <Desc3> <Description>At NeighborHealth we provide you with access to our world-renown dental care network of certified dental clinics</Description></Desc3>

      <Sub4> <Subtitle>The NeighborHealth Experience</Subtitle> </Sub4>
      <Sep4 />
      <Desc4> <Description>Receive a personal plan which includes photos of hotel options, recommendations for tourist attractions and activities, and background information about your Certified Specialist</Description></Desc4>

      <Track>Neighbor<BlueTrack>Health</BlueTrack>'s Track Record</Track>
      <OtherComps> <CompImg /> <CompImg /> <CompImg /> <CompImg /> <CompImg /> <CompImg /> </OtherComps>
    </InfoContainer>
  </Container>
);

export default AddedValue;