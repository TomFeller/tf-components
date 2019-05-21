import React from 'react';
import './button.css';

const ButtonView = (props) => {
    const {className, value, onClick} = props,
        {padding, backgroundColor, color, fontSize} = props;

    return (
        <button className={className}
                onClick={onClick}
                style={{
                    padding: padding,
                    color: color,
                    backgroundColor: backgroundColor,
                    fontSize: fontSize
                }}
        >
            {value}
        </button>
    )
};


export {ButtonView};
