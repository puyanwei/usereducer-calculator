import React, { useState, useReducer } from 'react';
import './App.css';

import Button from './components/Button';

const App = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [resultingNumber, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'number':
                return currentNumber;
            case 'add':
                return state + 1;
            case 'subtract':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    const handleNumber = e => {
        setCurrentNumber(e.target.value);
        dispatch('number');
    };

    return (
        <div className="App">
            <div className="container">
                <div className="calculator">
                    <input className="window" type="text" value={resultingNumber} readOnly />
                    <div className="row">
                        <Button label="1" handleClick={e => handleNumber(e)} />
                        <Button label="2" handleClick={e => handleNumber(e)} />
                        <Button label="3" handleClick={e => handleNumber(e)} />
                        <Button handleClick={() => dispatch('add')} label="+" />
                    </div>
                    <div className="row">
                        <Button label="4" handleClick={e => handleNumber(e)} />
                        <Button label="5" handleClick={e => handleNumber(e)} />
                        <Button label="6" handleClick={e => handleNumber(e)} />
                        <Button handleClick={() => dispatch('subtract')} label="-" />
                    </div>
                    <div className="row">
                        <Button label="7" handleClick={e => handleNumber(e)} />
                        <Button label="8" handleClick={e => handleNumber(e)} />
                        <Button label="9" handleClick={e => handleNumber(e)} />
                        <Button label="x" />
                    </div>
                    <div className="row">
                        <Button label="↤" />
                        <Button label="0" handleClick={e => handleNumber(e)} />
                        <Button label="=" />
                        <Button label="÷" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
