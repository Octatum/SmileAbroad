import React from 'react';
import styled from 'styled-components/macro';
import { Formik, Form, FastField } from 'formik';

import OpenQuestion from './Questions/OpenQuestion';
import SingleChoice from './Questions/SingleChoice';
import MultipleChoice from './Questions/MultipleChoice';
import getInitialState from '../../../page-components/GetStarted/getInitialState';
import validationSchema from '../../../page-components/GetStarted/validationSchema';

import recreational from './assets/recreational.jpg';
import cultural from './assets/cultural.jpg';
import outdoor from './assets/outdoor.jpg';
import ImageField from './Questions/ImageField';

const Container = styled(Form)`
  font-size: calc(0.75rem + 0.5vw);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const SendButton = styled.button`
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  text-transform: uppercase;
  padding: 0.5em 1em;
  flex: 0 1 auto;
  align-self: flex-end;
  background: ${props => props.theme.color.lightBlue};
  color: white;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 1.25em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  box-sizing: border-box;
  margin-top: 50px;

  text-align: justify;
  text-align-last: center;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Questionnaire(props) {
  return (
    <Formik
      initialValues={getInitialState()}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'customerData',
            ...values,
          }),
        })
          .then(() => {
            actions.setSubmitting(false);
            alert(
              'Thanks, we will contact you soon. Less than 48 hours, we promise'
            );
          })
          .catch(error => {
            actions.setSubmitting(false);
            alert(error);
          });
      }}
      render={({ errors, touched, isSubmitting, setFieldValue, values }) => (
        <Container
          className={props.className}
          name="customerData"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label>
              Don’t fill this out: <FastField name="bot-field" />
            </label>
          </p>
          <OpenQuestion
            questionText="What's your name?"
            name="name"
            autoComplete="name"
            disabled={isSubmitting}
          />
          <OpenQuestion
            questionText="What's your email address?"
            name="email"
            type="email"
            disabled={isSubmitting}
            autoComplete="email"
          />
          <OpenQuestion
            questionText="What's your phone number?"
            name="phone"
            disabled={isSubmitting}
            autoComplete="phone"
          />
          <SingleChoice
            values={values}
            questionText="What gender are you?"
            options={['Male', 'Female']}
            disabled={isSubmitting}
            setFieldValue={setFieldValue}
            name="gender"
            includeOpenAnswer
          />
          <OpenQuestion
            questionText="Where are you located?"
            name="location"
            disabled={isSubmitting}
          />
          <MultipleChoice
            values={values}
            questionText="Treatment you are looking for:"
            setFieldValue={setFieldValue}
            options={[
              'Implants',
              'Root canal',
              'Veneers',
              'Extractions',
              'Crowns and bridges',
            ]}
            disabled={isSubmitting}
            name="treatment"
            includeOpenAnswer
          />
          <SingleChoice
            values={values}
            questionText="Planned travel dates:"
            options={['Within month', 'Within 3 months', 'Later than 3 months']}
            name="travelDate"
            disabled={isSubmitting}
            setFieldValue={setFieldValue}
            includeOpenAnswer
          />
          <SingleChoice
            values={values}
            questionText="How would you rate your pain on a scale of 0 to 10, with 0 being no pain and 10 being the worst pain ?"
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            name="pain"
            singleAnswer
            setFieldValue={setFieldValue}
            disabled={isSubmitting}
            horizontal
          />
          <OpenQuestion
            questionText="Tell us about your dental situation"
            disabled={isSubmitting}
            name="dentalSituation"
          />
          <SingleChoice
            values={values}
            questionText="Do you plan to travel accompannied?"
            disabled={isSubmitting}
            setFieldValue={setFieldValue}
            options={['Yes', 'No']}
            name="travelAccompanied"
          />
          <SingleChoice
            values={values}
            questionText="What is most important for you when booking accommodation?"
            options={[
              'Proximity to shops',
              'Bar and Terrace',
              'Breakfast included',
              'Swimming pool and recreational areas',
            ]}
            disabled={isSubmitting}
            name="hotelCharacteristics"
            setFieldValue={setFieldValue}
            includeOpenAnswer
          />
          <MultipleChoice
            questionText="Which type of attractions do you prefer?"
            options={[
              {
                name: 'Recreational',
                image: recreational,
              },
              {
                name: 'Outdoor',
                image: outdoor,
              },
              {
                name: 'Cultural',
                image: cultural,
              },
            ]}
            optionRender={props => <ImageField {...props} />}
            disabled={isSubmitting}
            name="tourismActivities"
            setFieldValue={setFieldValue}
            includeOpenAnswer
            values={values}
            horizontal
          />
          <Text>
            We’re almost there, we can provide you with discounted prices for
            attractions, restaurant recommendations based on your interests.
            Help us plan your trip, tell us about your hobbies, food
            preferences, allergies, and other interests.
          </Text>
          <Text>
            Let us help you plan your trip! We provide you with discounted
            access to different spots around town. Tell us about yourself
            (hobbies, favourite food) so we can find you the best deal.
          </Text>
          <OpenQuestion
            questionText=""
            autoComplete="off"
            disabled={isSubmitting}
            name="extraDetails"
            as="textarea"
            optional
          />
          <SendButton disabled={isSubmitting} type="submit">
            Send
          </SendButton>
        </Container>
      )}
    />
  );
}

export default Questionnaire;
