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
      <nav class="navbar is-link">
        <div class="container">
          <div class="navbar-brand">
            <Link to="/" class="navbar-item">
              <img src="https://bulma.io/images/bulma-logo-white.png"
                alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
            </Link>
          </div>
        </div>
      </nav>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer class="footer">
          <div class="container has-text-centered">
            <h5 class="title is-5">João Oliveira</h5>
            <p>© {new Date().getFullYear()}, Built with
          {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
