import React, { useRef } from 'react';
import './App.css';

import Button from './components/Button';

const App = () => {
    const window = useRef(0);
    return (
        <div className="App">
            <div className="container">
                <div className="calculator">
                    <input className="window" type="text" ref={window} />
                    <div className="row">
                        <Button label="1" />
                        <Button label="2" />
                        <Button label="3" />
                    </div>
                    <div className="row">
                        <Button label="4" />
                        <Button label="5" />
                        <Button label="6" />
                    </div>
                    <div className="row">
                        <Button label="7" />
                        <Button label="8" />
                        <Button label="9" />
                    </div>
                    <Button label="0" />
                </div>
            </div>
        </div>
    );
};

export default App;
