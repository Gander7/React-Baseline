import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'button ' + (this.props.type ? this.props.type : '')}>
        {this.props.text}
      </div>
    )
  }
}

export default Button

// 