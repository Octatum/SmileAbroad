import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #00C6DB;
  padding: 20px;

  @media(max-width: 520px) {
    padding: 20px 10px;
  }
`;

const Texto = styled.p`
  font-family: 'Nunito', sans-serif;
  color: white;
  font-size: calc(0.4rem + 1vw);

`;


const Description = Texto.extend`
  width: 40%;
`;

const Separator = styled.div`
  width: 5px;
  background: white;
  height: 200px;
  border-radius: 10px;
  margin: auto 0;

  @media(max-width: 520px) {
    display: none;
  }
`;

const LinksTitle = Texto.extend`
  text-align: center;
  font-size: calc(0.5rem + 1vw);
  font-weight: 600;
  margin-bottom: 20px;
`;

const LinksCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const UsefulLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'Nunito', sans-serif;
  padding: 10px 0;
  font-size: calc(0.4rem + 1vw);

  @media(max-width: 520px) {
    padding: 5px;
  }
`;

const ContactCont = LinksCont.extend`
`;

const ContactTitle = LinksTitle.extend`

`;

const ContactData = Texto.extend`
  padding: 10px 0;
  @media(max-width: 520px) {
    padding: 5px
  }
`;

const MessageButton = styled(Link)`
  background: #ff392C;
  text-transform: uppercase;
  color: white;
  border: 2px solid #DD2520;
  border-radius: 30px;
  text-decoration: none;
  padding: 5px 0.5em;
  margin: 20px;
  font-size: calc(0.4rem + 1vw);
  font-family: 'Nunito', sans-serif;
  text-align: center;


  transition: box-shadow 0.25s linear;

  :hover{
    box-shadow: 4px 4px 4px 0 rgba(0,0,0,0.3);
  }

  @media(max-width: 520px) {
    padding: 5px 2.5px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
`;

const Footer = () => (
  <Container>
    <Description>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
    </Description>

    <Separator />

    <Div>
      <LinksTitle>Useful Links</LinksTitle>
      <LinksCont>
        <UsefulLink to="/">Home</UsefulLink>
        {/* 
        <UsefulLink to="/">Company</UsefulLink>
        <UsefulLink to="/">How To</UsefulLink>
        <UsefulLink to="/">Terms of Use</UsefulLink>
        */}
        <UsefulLink to="/Contact">Contact</UsefulLink>
        <UsefulLink to="/GetStarted">Get Started</UsefulLink>
      </LinksCont>
    </Div>
    
    <Separator />
    
    <Div>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactCont>
        <ContactData>+1 512 717 3280</ContactData>
        <ContactData>hello@neighbor.health</ContactData>
        <MessageButton to="/contact">send a message</MessageButton>
      </ContactCont>
    </Div>

  </Container>
);

export default Footer;