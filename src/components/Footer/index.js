import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  background: #00C6DB;
  padding: 20px;

  &, & > div {
    font-size: calc(0.4rem + 1vw);
    font-family: 'Nunito', sans-serif;
  }


  @media(max-width: 520px) {
    padding: 20px 10px;
  }
`;

const Texto = styled.p`
  color: white;
<<<<<<< HEAD
=======
  font-size: calc(0.4rem + 0.8vw);
>>>>>>> ContentUpdates
`;

const Description = Texto.extend`
  width: 40%;
  font-size: 1em;
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
  font-size: 1.1em;
  text-align: center;
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
  
  padding: 10px 0;
  font-size: 1em;
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
  font-size: 1em;
  
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
      NeighborHealth is committed to providing you with a service that meets your personal, treatment, and financial needs.  We ensure your safety by personally arranging your transportation, and ensuring you enjoy your stay in a safe manner. All our specialists, accommodations, and tourists attractions have been pre-screened for safety, quality, and convenience.
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
        <ContactData>Luciaromo94@gmail.com</ContactData>
        <MessageButton to="/contact">send a message</MessageButton>
      </ContactCont>
    </Div>

  </Container>
);

export default Footer;