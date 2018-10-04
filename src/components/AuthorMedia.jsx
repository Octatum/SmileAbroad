import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from './../utils/device';

const Container = styled.div`
  font-size: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;

  > * {
    margin-right: 1em;
  }

  ${device.tablet} {
    padding: 0 15px;
  }
`;

const Author = styled.p`
  font-weight: bold;
  color: ${props => props.theme.color.lightBlue};
  display: inline-block;
`;

const AuthorMedia = ({ authorName, className }) => {
  return (
    <Container className={className}>
      <Author>
        <span style={{ color: 'black', fontWeight: 'initial' }}>By</span> Dr.{' '}
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
        allowTransparency="true"
      />
    </Container>
  );
};

AuthorMedia.propTypes = {
  authorName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AuthorMedia;
