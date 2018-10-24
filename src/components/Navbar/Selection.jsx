import React from 'react';
import styled from 'styled-components/macro';
import Link from 'gatsby-link';

import ButtonComp from './../Button';
import DownArrow from './assets/arrow.svg';
import { device } from './../../utils/device';

const Container = styled.div`
  position: relative;

  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const Arrow = styled.img`
  width: 0.5em;
  position: absolute;
  right: -0.8em;
  top: calc(50% - 0.125em);

  transition: transform ease 0.5s;

  ${device.tablet} {
    transform: ${props => (props.reverse ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const SelectionName = styled.span`
  position: relative;
  margin: 0 auto;
`;

const Hidden = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  background: white;

  padding-top: 0.5em;
  width: 150%;
  left: -20%;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);

  ${Container}:hover & {
    display: flex;
  }

  ${device.tablet} {
    a {
      font-size: 0.8em;
      margin: 0 auto;
    }

    ${Container}:hover & {
      display: ${props => (props.show ? 'flex' : 'none')};
    }

    box-shadow: initial;
    display: ${props => (props.show ? 'flex' : 'none')};
    position: relative;
    width: initial;
    left: 0;
  }
`;

const SelectionLink = styled(ButtonComp(Link))`
  margin: 0.25em auto;
  font-size: 0.9em;
  max-width: 90%;
`;

const Selection = ({ className, links, children, isOpen, clickAction }) => {
  return (
    <Container className={className}>
      <SelectionName onClick={clickAction}>
        {children}
        <Arrow src={DownArrow} reverse={isOpen} />
      </SelectionName>
      <Hidden show={isOpen}>
        {links.map((link, index) => {
          return (
            <SelectionLink to={link.url} key={index}>
              {link.name}
            </SelectionLink>
          );
        })}
      </Hidden>
    </Container>
  );
};

export default Selection;
