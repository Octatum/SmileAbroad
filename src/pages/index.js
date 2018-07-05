import React from 'react'
import Link from 'gatsby-link'

import Presentation from './../components/Presentation';
import Navbar from './../components/Navbar';
import OurServices from './../components/OurServices';

const IndexPage = () => (
  <div>
    <Presentation />
    <Navbar />
    <OurServices />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
