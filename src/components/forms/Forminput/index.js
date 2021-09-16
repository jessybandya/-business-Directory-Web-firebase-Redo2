import React from 'react';
import './style.css';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return(
        <div className="fomrmRow">
        {label && (
            <label>
                {label}
            </label>
        )}
        <input className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    );
}



export default FormInput;
