//Declarar nome da constante que contem a action

export const ADD_TODO = "ADD_TODO";

//Criar um let para criar o incremento do ToDO
let nextTodo = 0;

export function addTodo (text){
    return({
        type:ADD_TODO,
        id:nextTodo++,
        text
    })
}