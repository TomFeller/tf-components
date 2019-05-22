import React from 'react';
import './header.css';

const HeaderView = (props) => {
    const {className} = props,
        {padding, backgroundColor, color, fontSize, children} = props;

    return (
        <header id={'app-header'}
                className={className}
                style={props}>
            {children}
        </header>
    )
};


export {HeaderView};
