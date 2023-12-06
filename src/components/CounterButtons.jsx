import React from 'react';

function CounterButtons({ label, onDecrement, onIncrement, count }) {
    return (
        <div className="fruit">
            <p>{label}</p>
            <button onClick={onDecrement}>-</button>
            <p className="counter">{count}</p>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default CounterButtons;