import React from 'react';
import './index.css';
import Home from './Home';

//Fazendo novos imports
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers'


//Criando a stores

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Home />,
  </Provider>,
rootElement
)



/* ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
); */



