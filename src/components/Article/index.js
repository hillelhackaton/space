import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Article extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        Article
      </div>
    )
  }
}