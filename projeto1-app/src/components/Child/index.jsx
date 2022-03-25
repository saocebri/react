import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    
    return (
      <div>
        <h3>Olá, {this.props.nome}, eu sou um componete filho</h3>
        <h3>{this.props.dados}</h3>
      </div>
    )
  }
}
