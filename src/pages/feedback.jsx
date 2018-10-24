import React from 'react';
import styled from 'styled-components/macro';

import Feedback from '../components/Feedback';
import AppLayout from '../components/AppLayout';
import background from '../components/Feedback/assets/background.png';

const Layout = styled.div`
  background-image: url('${background}');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;

const FeedbackPage = () => {
  return (
    <AppLayout>
      <Layout>
        <Feedback />
      </Layout>
    </AppLayout>
  );
};

export default FeedbackPage;
