// const newMessage = 'Mario Eduardo Alvarez Torres';

// const getMsg = () =>{
//     let msgText = "Mensaje de una función"
//     return msgText;
// }
import PropTypes from 'prop-types';
export const FirstApp = ({title,subTitle}) =>{
    return(
        <>
            <div dat-testid="test-title">{ title }</div>
            <h1>{ title }</h1>
            <p> { subTitle } </p>
        </>
    );     
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps={
    title: "No hay Titulo",
    //subTitle: "No hay subtitulo",
}