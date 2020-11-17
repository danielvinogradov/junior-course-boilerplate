import React from 'react'
import PropTypes from 'prop-types'

class BaseHeadline extends React.Component {
  render() {
    return <h1>{this.props.headline}</h1>
  }
}

BaseHeadline.propTypes = {
  headline: PropTypes.string.isRequired
}

export default BaseHeadline
