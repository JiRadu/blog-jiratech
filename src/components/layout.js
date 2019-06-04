import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => (
  <>
  <h3>Jiratech</h3>
  <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
