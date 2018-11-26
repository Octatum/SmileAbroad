import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  "Name": Yup.string()
    .min(2, 'Must be longer than 2 characters!')
    .required('This field is required'),
  "Email": Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  "Phone number": Yup.string()
    .min(2, 'Must be longer than 2 characters!')
    .required('This field is required'),
  "Gender": Yup.string().required('This field is required'),
  "Current location": Yup.string().required('This field is required'),
  "Treatment": Yup.array()
    .of(Yup.string())
    .required('Please choose at least one option'),
  "Travel date": Yup.string().required('This field is required'),
  "Pain rating": Yup.number().required('This field is required'),
  "Current dental situation": Yup.string().required('This field is required'),
  "Wants to travel accompannied": Yup.string().required('This field is required'),
  "Accommodation priorities": Yup.string().required('This field is required'),
  "Prefered attractions": Yup.array()
    .of(Yup.string())
    .required('Please choose at least one option'),
  "Extra details": Yup.string(),
});

export default validationSchema;
