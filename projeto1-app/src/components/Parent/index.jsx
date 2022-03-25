import React, { Component } from 'react'
import Child from '../Child'
import CompFuncional from '../compFuncional'

export default class Parent extends Component {
  render() {
    const {nome} = this.props
    return (
      <div>
          <h2>Olá, {nome}, sou um componente pai</h2>
          <Child 
          dados="Sou o texto enviado do componente pai para o componente filho"
          nome = {nome}           
          />
          <CompFuncional
          DadosNovos = "Texto de componente funcional passado por props"
          
          />

      </div>
    )
  }
}
