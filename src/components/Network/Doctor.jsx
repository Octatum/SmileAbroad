import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;

  p {
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

const DocImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Doctor = ({ className, imageURL, name, carrera, docId }) => {
  const isId = docId.substring(0, 2).toUpperCase() != 'ID';

  return (
    <Container className={className}>
      <DocImage src={imageURL} />
      <Name>{name}</Name>
      <p>{carrera}</p>
      <p>{isId ? 'ID ' + docId : docId}</p>
    </Container>
  );
};

Doctor.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carrera: PropTypes.string.isRequired,
  docId: PropTypes.string.isRequired,
};

export default Doctor;
