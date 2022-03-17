import React from 'react'

function CompFuncional(props) {
    return (
        <div>
            {/* <h2>Um Salve para o componente funcional{props.react}</h2> */}
            <h2>Um Salve para o componente funcional {props.react}</h2>
            <h4><i>{props.DadosNovos}</i></h4>
        </div>
    )
}

export default CompFuncional