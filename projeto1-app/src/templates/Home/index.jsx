
import './style.css';
import React, { Component } from 'react';
import Demo from '../../components/Demo';
import CompFuncional from '../../components/compFuncional';
import { Form } from '../../components/form';
import Parent from '../../components/Parent';


export default class Home extends Component {

  nomes() {
    const nomes = 'Carlos Eduardo';
    return nomes;
}

  /* endereco() {
    const endereco = 'src/App.jsx'
    return endereco;
  }

  soma(n1, n2) {
    var total = n1 + n2;
    return total;
  } */
  render() {

    const react = 'react'
    return (

      <div className="App">
        <Demo
        nome = {this.nomes()} 
        />        
        <CompFuncional
        react={react}
        />
        <Form 
        nome = {this.nomes()}
        />
        <Parent 
        nome = {this.nomes()}
        />
      </div>


    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

