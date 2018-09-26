import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {device} from '../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  background: #00C6DB;
  padding: 20px;

  font-size: calc(0.5rem + 0.5vw);

  &, & > div {
    font-family: 'Nunito', sans-serif;
  }

  ${device.mobile} {
    padding: 20px 10px;
  }
`;

const Texto = styled.p`
  color: white;
  
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

  ${device.mobile} {
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
  ${device.mobile} {
    padding: 5px;
  }
`;

const ContactCont = LinksCont.extend`
`;

const ContactTitle = LinksTitle.extend`

`;

const ContactData = Texto.extend`
  padding: 10px 0;
  word-break: break-all;
  ${device.mobile} {
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

  ${device.mobile} {
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
      NeighborHealth creates a personalized itinerary that provides you with personal transportation between dental appointments,
      any selected tourist activities and attractions, and your chosen accommodation services which have all been 
      pre-selected for safety and convenience.
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
        <ContactData>lucia@neighborhealthco.com</ContactData>
        <MessageButton to="/contact">send a message</MessageButton>
      </ContactCont>
    </Div>

  </Container>
);

export default Footer;