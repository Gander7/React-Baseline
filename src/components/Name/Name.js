import React, { Component } from 'react'
import './Name.css'

class Name extends Component {
  constructor(props) {
    super(props)
    if(props.name === undefined) 
      throw 'Name requires name.'
  }

  render() {
    return (
      <div className={'name ' + (this.props.type ? this.props.type : '')}>
        {this.props.name}
      </div>
    )
  }
}

export default Name

// 