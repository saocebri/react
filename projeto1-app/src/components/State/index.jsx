import React, { Component } from 'react'

export default class State extends Component {
    state = {
        texto: "Este é o valor representando o estado original da aplicação!"
    }
    //Manipulador de estado
    manipuladorState = () => {
        // console.log('Fui clicado')
        this.setState({
            texto: "Você acaba de alterar o estado original deste componente - através da ação do usuario"
        })
    }
    manipuladorState2 = () => {
        // console.log('Fui clicado')
        this.setState({
            texto: "Zé Mané"
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.texto}</h3>
                <button onClick={this.manipuladorState}>Clique em mim</button>
                <br></br>
                <button onClick={this.manipuladorState2}>Não Clique em mim</button>
                <br></br>                
            </div>
        )
    }
}
