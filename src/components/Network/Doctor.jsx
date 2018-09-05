import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`

`;

const DocImage = styled.img`
  max-width: fit-content;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Doctor = ({
  imageURL,
  name,
  carrera,
  id
}) => (
  <Container>
    <DocImage src={imageURL} />
    <Name>{name}</Name>
    <p>{carrera}</p>
    <p>{id}</p>
  </Container>
)

Doctor.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carrera: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired  
};


export default Doctor;