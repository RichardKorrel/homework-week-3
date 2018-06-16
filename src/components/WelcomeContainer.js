// src/components/WelcomeContainer.js

import React, {PureComponent} from 'react'
import Welcome from './Welcome'

export default class WelcomeContainer extends PureComponent {

  // No behaviour for this Container component other than
  // to render the Welcome component
  render() {
    return <Welcome  />
  }
}
