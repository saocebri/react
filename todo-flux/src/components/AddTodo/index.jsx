import React, { Component } from 'react'


export default class addTodo extends Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }

    addItem = (e) => {
        e.preventDefault()
        var node = this.input.current.value
        var text = node.trim()
        this.props.onAddClick(text)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.input}></input>
               <button className="btn-insert" onClick={e=>this.addItem(e)}>
                   Adicionar tarefa
               </button>
            </div>
        )
    }
}
