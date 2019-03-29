import React from 'react';
import './../App.css';

const Button = ({ label, handleClick }) => {
    return (
        <button value={label} onClick={e => handleClick(e)}>
            {label}
        </button>
    );
};

export default Button;
