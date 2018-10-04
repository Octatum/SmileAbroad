import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { globalTheme } from './theme';
import { device } from '../../utils/device';
import './index.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AppLayout = ({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <Layout>
      <Navbar />
      <Helmet
        title="NeighborHealth"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossOrigin="anonymous"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <div>{children}</div>
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default AppLayout;
