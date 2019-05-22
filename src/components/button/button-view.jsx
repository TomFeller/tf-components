import React from 'react';
import './button.css';

const ButtonView = (props) => {
    const {className, value, onClick, link, href} = props,
        {padding, backgroundColor, color, fontSize} = props;

    return (
        <button className={className}
                onClick={onClick}
                style={props}> 
            {link ? <a href={href}>{value}</a> : value}
        </button>
    )
};


export {ButtonView};
