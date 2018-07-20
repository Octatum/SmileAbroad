import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
`;

const Title = styled.p`
  font-size: calc(1rem + 1vw);
  margin-bottom: 20px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
  min-width: 100%;
  box-sizing: border-box;

  @media(max-width: 520px) {
    padding: 0;
    margin-bottom: 10px;
  }
`;


const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-sizing: border-box;
  padding: 5px;
  max-width: 20%;
  min-width: 150px;
  height: 100%;
  margin-bottom: 20px;
  
  border-radius: 20px;
  background: ${props => props.isSelected !== false ? 'rgba(238, 238, 238, 0.25)' : ''};
  box-shadow: ${props => props.isSelected !== false ? '1px 1px 20px 5px rgba(0,0,0,0.25)' : ''};
  @media(min-width: 800px) {
  :hover {
    background: #eee;
    box-shadow: 1px 1px 10px 5px rgba(0,0,0,0.25);
  }
  }
`;

const OtherInput = styled.input`
  font-size: calc(0.85rem + 1vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
`;

const ImageContainer = styled.div`
  display: inline-block;
  max-width: 75%;

`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

const Category = styled.p`
  font-size: calc(0.85rem + 1vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  display: inline-block;

  &::first-letter {
    color: ${props => props.theme.color.lightBlue};
    text-transform: uppercase;
  }
`;


let otherAnswer = '';


const MultipleImage = (props) => {

  let answersList = '';
  answersList = props.options.map((data, index) => {
    return (
      <Label
        key={data.description}
        onClick={() => handleSelection(index)}
        isSelected={props.selectedOptions[index]}>

        <ImageContainer>
          <Image src={data.url} alt={data.description} />
        </ImageContainer>

        <Category>
          {data.description}
        </Category>
      </Label>
    );
  });

  let otherOption = '';
  if (props.other) {
    otherOption = (
      <Label
        onClick={() => handleSelection(props.selectedOptions.length - 1)}
        isSelected={props.selectedOptions[3]}>

        <Div>
          <Category>Other:</Category>
          <OtherInput 
              type="text" 
              onChange={userResponse} 
              onClick={(event) => event.stopPropagation()}/>
        </Div>
      </Label>
    );
  }

  function userResponse(event) {
    otherAnswer = event.target.value;
    const options = props.selectedOptions;

    options[options.length - 1] = otherAnswer;

    props.handleChange(options, props.stateKey);
  }

  function handleSelection(index) {
    const options = props.selectedOptions;

    if (index == options.length - 1) {
     if (options[index] !== false) {
        options[index] = false;
      }
      // if false change to answer
      else {
        options[index] = otherAnswer;
      }
    }
    else {
      options[index] = !options[index];
    }

    props.handleChange(options, props.stateKey);
  }

  return (
    <Container className={props.className}>
      <Title> {props.question} </Title>
      {answersList}
      {otherOption}
    </Container>
  )
};

export default MultipleImage;
  