import React from 'react';

export const H2 = (props) => {
    console.log(props);
    return <h2 style={props.style}>{props.children}</h2>;
};