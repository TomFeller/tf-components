import React from 'react';
import './block.css';

const BlockView = (props) => {
    const {className, children, background, border} = props;

    return (
        <div className={className} style={{background: background, border: border}}>{children}</div>
    )
};


export {BlockView};
