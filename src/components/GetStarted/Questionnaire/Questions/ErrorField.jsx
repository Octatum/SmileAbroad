import { ErrorMessage } from 'formik';
import styled from 'styled-components/macro';

const ErrorField = styled(ErrorMessage)`
  color: darkred;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
`;

export default ErrorField;
