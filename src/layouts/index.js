import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';
import { globalTheme } from './../components/styles/theme';

import './index.css'
import Footer from './../components/Footer';
import Navbar from './../components/Navbar/index';

const AppLayout = styled.div`
  display: flex; 
  flex-direction: column;
`;


const Layout = ({ children, data }) => (
  <ThemeProvider theme={globalTheme}>
    <AppLayout>
      <Navbar />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div>
          {children()}
      </div>
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
