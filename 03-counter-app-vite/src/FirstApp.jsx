const newMessage = 'Mario Eduardo Alvarez Torres';
const getMsg = () =>{
    let msgText = "Mensaje de una función"
    return msgText;
}

export const FirstApp = () =>{
    return(
        <>
            <h1> { getMsg() } </h1>
            <p>Soy un parrafo</p>
        </>
    );     
}