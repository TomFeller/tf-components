import React from 'react';

export const
    H1 = (props) => {
        return <h1 style={props.style} className={props.className}>{props.children}</h1>
    },
    H2 = (props) => {
        return <h2 style={props.style} className={props.className}>{props.children}</h2>
    },
    H3 = (props) => {
        return <h3 style={props.style} className={props.className}>{props.children}</h3>
    },
    H4 = (props) => {
        return <h4 style={props.style} className={props.className}>{props.children}</h4>
    },
    H5 = (props) => {
        return <h5 style={props.style} className={props.className}>{props.children}</h5>
    },
    H6 = (props) => {
        return <h6 style={props.style} className={props.className}>{props.children}</h6>
    },
    Paragraph = (props) => {
        return <p style={props.style} className={props.className}>{props.children}</p>
    },
    Span = (props) => {
        return <p style={props.style} className={props.className}>{props.children}</p>;
    };