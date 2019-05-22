import React from 'react';
import './page.css';

const PageView = (props) => {
    const {className} = props,
        {children} = props;

    return (
        <div id={'app-page'} className={className}>
            {children}
        </div>
    )
};


export {PageView};
