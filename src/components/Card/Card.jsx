import React from 'react';

const Card = ({
    title,
    description,
    children,
    className = '',
    image = null,
    shadow = true
}) => {
    return (
        <div className={`card ${shadow ? 'shadow-sm' : ''} ${className}`}>
            {image && <img src={image} className="card-img-top" alt={title} />}
            <div className="card-body d-flex flex-column">
                {title && <h3 className="card-title">{title}</h3>}
                {description && <p className="card-text">{description}</p>}
                {children}
            </div>
        </div>
    );
};

export default Card;