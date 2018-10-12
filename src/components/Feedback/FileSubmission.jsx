import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { device } from '../../utils/device';

import example1 from './assets/1.jpg';
import example2 from './assets/2.jpg';
import example3 from './assets/3.jpg';
import example4 from './assets/4.jpg';
import example5 from './assets/5.jpg';

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
    outline: 1px dotted ${props => props.theme.color.lightBlue};
  }
`;

const FileInputLabel = styled.label`
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  display: inline-block;
  cursor: pointer;

  border: 3px solid ${props => props.theme.color.lightBlue};
  border-radius: 0.75em;
  padding: 0.25em 0.4em;
`;

const FileList = styled.div`
  font-size: 0.95em;
  margin-top: 0.25em;
  margin-left: 0.25em;
  color: ${({ theme }) => theme.color.black};

  p {
  }

  ul {
    margin-left: 1em;
  }

  li {
    list-style-position: inside;
  }
`;

const FileExamples = styled.section`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: space-between;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  justify-items: center;
  align-items: center;

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  ${device.mobile} {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const ImageExample = styled.img`
  max-width: 200px;
  max-height: 100px;
  width: 100%;
  height: 100%;
  margin: 1em;
`;

const exampleFiles = [
  example1,
  example2,
  example3,
  example4,
  example5,
]

const AcceptedFileFormats = styled.span`
  font-size: 0.8em;
`;

const SubmitFile = ({
  className,
  questionText,
  name,
  fileList,
  onChange,
  ...restProps
}) => {
  let fileNames = [];

  return (
    <Container className={className}>
      <Title> {questionText} </Title>
      <FileInput
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        accept=".jpg, .jpeg, .png, .pdf, .tiff, .bmp"
        {...restProps}
      />
      <FileExamples>
        {exampleFiles.map((exampleFile, index) => (
          <ImageExample src={exampleFile} key={index} />
        ))}
      </FileExamples>

      <FileInputLabel htmlFor={name}>
        Add files
      </FileInputLabel>
      <AcceptedFileFormats>{" "} PDFs and all image types are accepted</AcceptedFileFormats>
      
      {fileList && (
        <FileList>
          <p>Selected files:</p>
          <ul>
            {Object.keys(fileList).map(fileIndex => (
              <li key={fileList[fileIndex].name}>{fileList[fileIndex].name}</li>
            ))}
          </ul>
        </FileList>
      )}
    </Container>
  );
};

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
  fileList: null,
};

export default SubmitFile;
