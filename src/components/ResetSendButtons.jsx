import React from 'react';

function ResetSendButtons({ isReset, onClick, label }) {
    return (
        <button
            type={isReset ? "button" : "submit"}
            className={isReset ? "reset-button" : ""}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default ResetSendButtons;