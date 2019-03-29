import React, { useState } from 'react';
import './App.css';

import Button from './components/Button';

const App = () => {
    const [currentNumber, setCurrentNumber] = useState(0);

    const handleClick = e => {
        setCurrentNumber(e.target.value);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="calculator">
                    <input className="window" type="text" value={currentNumber} readOnly />
                    <div className="row">
                        <Button handleClick={handleClick} label="1" />
                        <Button handleClick={handleClick} label="2" />
                        <Button handleClick={handleClick} label="3" />
                        <Button handleClick={handleClick} label={'+'} />
                    </div>
                    <div className="row">
                        <Button handleClick={handleClick} label="4" />
                        <Button handleClick={handleClick} label="5" />
                        <Button handleClick={handleClick} label="6" />
                        <Button handleClick={handleClick} label="-" />
                    </div>
                    <div className="row">
                        <Button handleClick={handleClick} label="7" />
                        <Button handleClick={handleClick} label="8" />
                        <Button handleClick={handleClick} label="9" />
                        <Button handleClick={handleClick} label="x" />
                    </div>
                    <div className="row">
                        <Button handleClick={handleClick} label="↤" />
                        <Button handleClick={handleClick} label="0" />
                        <Button handleClick={handleClick} label="=" />
                        <Button handleClick={handleClick} label="÷" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
