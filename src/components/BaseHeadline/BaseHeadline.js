import React from 'react'
import PropTypes from 'prop-types'

class BaseHeadline extends React.Component {
  render() {
    return <h1>{this.props.children}</h1>
  }
}

BaseHeadline.propTypes = {
  children: PropTypes.string.isRequired
}

export default BaseHeadline
