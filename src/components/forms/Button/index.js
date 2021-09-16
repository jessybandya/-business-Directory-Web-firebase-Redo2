import React from 'react';
import './style.css';

const Button = ({children, ...otherProps}) =>{
    return (
        <div className="btn" {...otherProps}>
            {children}
        </div>
    )
}

export default Button
