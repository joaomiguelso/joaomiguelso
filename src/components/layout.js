/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <footer class="footer has-background-grey-light">
        <div class="container has-text-centered">
          <br />
          <h6 class="title is-6">© {new Date().getFullYear()}, Built by João Oliveira</h6>
          <div class="made-by-bulma">
            <a href="https://bulma.io"><img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="163" height="31" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
