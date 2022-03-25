import React, { Component } from 'react'

export default class Demo extends Component {
    /*nomes() {
        const nomes = 'Carlos Eduardo';
        return nomes;
    }*/
    render() {
        const {nome} = this.props
        return (
            <div>
                <h1>{nome}</h1>
                <h2>Hello World!! Reactjs</h2>
            </div>
        )
    }
}
