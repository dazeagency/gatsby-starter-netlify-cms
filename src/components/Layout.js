import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <h1>Ula la</h1>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
