import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="calculator">
                        <input className="window" type="text" />
                        <div className="row">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                        <div className="row">
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>
                        <div className="row">
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                        </div>
                        <button>0</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
