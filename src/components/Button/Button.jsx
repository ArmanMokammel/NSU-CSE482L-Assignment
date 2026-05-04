import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    disabled = false,
    className = '',
    type = 'button'
}) => {
    const baseClass = `btn btn-${variant}`;

    return (
        <button
            type={type}
            className={`${baseClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;