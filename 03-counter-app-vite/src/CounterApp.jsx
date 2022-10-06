import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) =>{
    
    const [ countert,setCounter ] = useState(value);

    const handleAdd = () =>{
        setCounter(countert+1);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { countert } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value : 1,
}