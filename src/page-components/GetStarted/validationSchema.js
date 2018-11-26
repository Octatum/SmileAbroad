import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Must be longer than 2 characters!')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  phone: Yup.string()
    .min(2, 'Must be longer than 2 characters!')
    .required('This field is required'),
  gender: Yup.string().required('This field is required'),
  location: Yup.string().required('This field is required'),
  treatment: Yup.array()
    .of(Yup.string())
    .required('This field is required'),
  travelDate: Yup.string().required('This field is required'),
  pain: Yup.number().required('This field is required'),
  dentalSituation: Yup.string().required('This field is required'),
  travelAccompanied: Yup.string().required('This field is required'),
  hotelCharacteristics: Yup.string().required('This field is required'),
  tourismActivities: Yup.array()
    .of(Yup.string())
    .required('This field is required'),
  extraDetails: Yup.string(),
});

export default validationSchema;
