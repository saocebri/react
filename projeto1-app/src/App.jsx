
import './App.css';
import React, { Component } from 'react'
import Demo from './componentes/Demo'

export default class App extends Component {

  /* endereco() {
    const endereco = 'src/App.jsx'
    return endereco;
  }

  soma(n1, n2) {
    var total = n1 + n2;
    return total;
  } */
  render() {
    return (

      <div className="App">
       <Demo />
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

