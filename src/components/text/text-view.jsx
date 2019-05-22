import React from 'react';
import './text.css';

const TextView = (props) => {
    const {Tag, className, value, onClick, center} = props;

    return (
        <Tag className={className}
             onClick={onClick}
             style={props}>
            {value}
        </Tag>
    )
};


export {TextView};
