import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../utils/device';

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
`;

const Title = styled.p`
  font-size: 1.25em;
  margin-bottom: 0.5em;
  
  padding: 10px;
  box-sizing: border-box;

  ${device.mobile} {
    padding: 0;
    margin-bottom: 10px;
  }
`;

const FileInput = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;

  :focus + label {
	  outline: 1px dotted ${props => props.theme.color.lightBlue};;
  }
`;

const FileInputLabel = styled.label`
  font-size: 1em;
  font-weight: bold;
  color: black;
  display: inline-block;
  cursor: pointer;

  border: 3px solid ${props => props.theme.color.lightBlue};
  border-radius: 0.75em;
  padding: 0.15em;
`;

const FileList = styled.div`
font-size: 0.75em;
  margin-top: 0.25em;
  margin-left: 0.25em;
  p {

  }
  ul {
    margin-left: 1em;
  }
  li {
    list-style-position: inside;
  }
`;


const SubmitFile = ({ className, questionText, name, fileList, onChange, ...restProps }) => {
  let fileNames = [];
  if(fileList) {
    for (let i = 0; i < fileList.length; i++) {
      fileNames.push(
        <li key={i}>
          {fileList[i].name}
        </li >
      )
    }
  }

  return (
    <Container className={className}>
      <Title> {questionText} </Title>
      <FileInput type="file" {...restProps} id={name} name={name} onChange={onChange} />
      <FileInputLabel htmlFor={name}>Choose files</FileInputLabel>
      {fileList &&
        <FileList>
          <p>Selected files:</p>
          <ul>{
            fileNames
          }</ul>
        </FileList>
      }
    </Container>
  )
}

SubmitFile.proptypes = {
  className: PropTypes.string,
  questionText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  fileList: PropTypes.Array,
};

SubmitFile.defaultProps = {
  required: true,
  multiple: false,
  fileList: null
}

export default SubmitFile;