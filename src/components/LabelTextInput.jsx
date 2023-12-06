import React from 'react';

function LabelTextInput({ label, name, onChange, value, type }) {
    return (
        <label>
            {label}
            <input className="input"
                type={type}
                name={name}
                onChange={onChange}
                value={value}
            />
        </label>
    );
}

export default LabelTextInput;