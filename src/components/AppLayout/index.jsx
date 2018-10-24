import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components/macro';

import { globalTheme } from './theme';
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
        titleTemplate="%s - NeighborHealth - Dental tourism in Mexico"
        meta={[
          {
            name: 'description',
            content:
              'At NeighborHealth we help you find the ideal Dental Health Specialized Treatment in Mexico. All the way from dental implants to cosmetic dentistry.',
          },
          {
            name: 'keywords',
            content:
              'dental implant, Dental cost in mexico, medical tourism in mexico, cheap implants mexico',
          },
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
