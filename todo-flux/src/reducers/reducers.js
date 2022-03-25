//Importando o redux
import { combineReducers } from 'redux';
//Importar o Actions
import { ADD_TODO } from '../actions/actions'

//Criar a função para criação dos iterateEntries
function todo(state, action) {
    //Vamos verificar o que a ction está fazendo
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text
            }
        default:
            return state

    }

}
//Criar uma função para criar uma lista de itens

function todos(state=[], action){
    switch(action.type){
        case ADD_TODO: 
        return[
            ...state, todo(undefined, action)
        ]
        default:
            return state
    }
}

//Criar um terceira função para unir as duas primeiras funções a partir da função combineReducers

const todoApp = combineReducers({
    todos
})

//Export do todoApp

export default todoApp