export const Form = (props) => {
    return (
        <form class="">
            <label htmlFor="login">
               Email: <input types="text" name="login" id="login" placeholder="albacarlos2012@gmail.com"></input>
            </label>      
            <h2>Um 2º Salve para o componente funcional, {props.nome}</h2>      
        </form>      
        
    )
}