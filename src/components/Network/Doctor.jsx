import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  p {
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

const DocImage = styled.img`
  max-width: 100%;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Doctor = ({ className, imageURL, name, carrera, docId }) => (
  <Container className={className}>
    <DocImage src={imageURL} />
    <Name>Dr. {name}</Name>
    <p>{carrera}</p>
    <p>{docId}</p>
  </Container>
);

Doctor.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carrera: PropTypes.string.isRequired,
  docId: PropTypes.string.isRequired,
};

export default Doctor;
