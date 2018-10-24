import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { device } from './../utils/device';

const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${device.tablet} {
    padding: 0 15px;
  }
`;

const Author = styled.p`
  font-weight: bold;
  color: ${props => props.theme.color.lightBlue};
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  display: inline-block;
`;

const AuthorMedia = ({ authorName, className }) => {
  return (
    <Container className={className}>
      <Author>
        <span style={{ color: 'black', fontWeight: 'initial' }}>By</span>{' '}
        {authorName}
      </Author>
      <iframe
        title="Facebook"
        src={
          'https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FNeighborHealth%2F&layout=button&size=small&mobile_iframe=true&appId'
        }
        width="59"
        height="20"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
      />
    </Container>
  );
};

AuthorMedia.propTypes = {
  authorName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AuthorMedia;
