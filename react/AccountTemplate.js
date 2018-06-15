import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'render'
export default class AccountTemplate extends Component {
  render() {

    return (
      <div>
        <div className="f5 w-100">Profile Summary</div>
        <div className="w-100">
          <Link page="store/account/summary">Summary Tab</Link>
          <Link page="store/account/orders">Orders Tab</Link>
        </div>
      </div>
    )
  }
}

