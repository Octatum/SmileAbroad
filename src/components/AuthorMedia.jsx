import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {device} from './../utils/device';

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
  font-size: 0.8em;
  font-style: italic;
  display: inline-block;

`;


const AuthorMedia = ({authorName, className, facebookURL}) => {
  console.log(facebookURL);
  return (
    <Container className={className}>
      <Author>{authorName}</Author>
      {facebookURL && <iframe 
        src={"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2F" + facebookURL + "%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId"} 
        width="59" 
        height="20" 
        style={{border: "none", overflow: "hidden"}} 
        scrolling="no" 
        frameBorder="0" 
        allowTransparency="true" />}
      

    </Container>
  )
}

AuthorMedia.propTypes = {
  authorName: PropTypes.string.isRequired,
  className: PropTypes.string,
  facebookURL: PropTypes.string

}

export default AuthorMedia;