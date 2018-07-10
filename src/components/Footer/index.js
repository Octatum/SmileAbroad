import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  display: grid;
  grid-template: 1fr 3fr 1fr / 3fr 5px 1fr 5px 1fr;
  grid-template-areas:
    ". . titleLinks . Contact"
    "Desc padL links padR ContactInfo"
    ". . links . .";
  height: auto;
  background: #00C6DB;
  padding: 20px;

`;

const Texto = styled.p`
  font-family: sans-serif;
  color: white;
  font-size: 1.25rem;
`;

const LinksTitle = Texto.extend`
  grid-area: titleLinks;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
const ContactTitle = LinksTitle.extend`
  grid-area: Contact;
`;

const Description = Texto.extend`
  grid-area: Desc;
  padding: 0 50px;
`;

const SeparatorL = styled.div`
  width: 100%;
  background: white;
  height: 100%;
  border-radius: 10px;
  margin: auto 0;
  grid-area: padL;
`;
const SeparatorR = SeparatorL.extend`
  grid-area: padR;
`;

const LinksCont =  styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;  

const UsefulLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  padding: 10px 0;
  font-size: 1.25rem;
`;

const ContactCont = LinksCont.extend`
  grid-area: ContactInfo;
`;

const ContactData = Texto.extend`
`;

const MessageButton = styled(Link)`
  background: #ff392C;
  text-transform: uppercase;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  padding: 10px 25px;
  margin: 0 15px;
  font-size: 1.5rem;
  font-family: sans-serif;
  text-align: center;
`;

const Footer = () => (
  <Container>
    <LinksTitle>Useful Links</LinksTitle>
    <LinksCont> 
      <UsefulLink to="/">Home</UsefulLink>
      <UsefulLink to="/">Company</UsefulLink>
      <UsefulLink to="/">How To</UsefulLink>
      <UsefulLink to="/">Terms of Use</UsefulLink>
      <UsefulLink to="/">Contact</UsefulLink>
      <UsefulLink to="/GetStarted">Get Started</UsefulLink>
    </LinksCont>

    <ContactTitle>Contact Us</ContactTitle>
    <ContactCont>
      <ContactData>+1 512 717 3280</ContactData>
      <ContactData>hello@neighbor.health</ContactData>
      <MessageButton to="/contact">send a message</MessageButton>
    </ContactCont>

    <Description>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
    </Description>
    
    <SeparatorL />
    <SeparatorR />
  </Container>
);

export default Footer;