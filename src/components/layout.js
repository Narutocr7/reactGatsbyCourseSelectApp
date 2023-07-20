/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './Reusable/Footer'
import Navbar from './Reusable/Navbar'

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({children}) => (
  <>
    <Navbar/>
    {children}
    <Footer/>
  </>
)

export default Layout
