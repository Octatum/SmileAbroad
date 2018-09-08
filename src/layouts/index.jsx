import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';
import { globalTheme } from '../components/styles/theme';
import {device} from './../utils/device';

import './index.css'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AppLayout = styled.div`
  display: flex; 
  flex-direction: column;
  position: relative;
`;

const PhoneNumber = styled.p`
  position: fixed;
  font-size: calc(0.5rem + 0.5vw);
  z-index: 100;
  top: 0;
  right: 3.5em;
  display: inline-block;
  font-family: ${globalTheme.fontFamily.main}, sans-serif;

  ${device.tablet} {
    right: 1em;
  }
`;


const Layout = ({ children, data }) => (
  <ThemeProvider theme={globalTheme}>
    <AppLayout>
      <PhoneNumber>+1 512 717 3280</PhoneNumber>
      <Navbar />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        script={[
          { src:"https://identity.netlify.com/v1/netlify-identity-widget.js" }
        ]}
      />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <div>
          {children()}
      </div>
      {() => {
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          })
        }
      }}
      <Footer />
    </AppLayout>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
