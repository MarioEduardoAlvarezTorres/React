import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) =>{
    
    const [ countert,setCounter ] = useState(value);

    const handleAdd = () =>{
        setCounter(countert+1);
    }
    const handleRest = () =>{
        setCounter(countert-1);
    }
    const reset = () =>{
        setCounter(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { countert } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleRest }>
                -1
            </button>
            <button onClick={ reset }>
                reset
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