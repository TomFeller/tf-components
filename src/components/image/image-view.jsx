import React from 'react';
import './image.css';

const ImageView = (props) => {
    const {className, width, src, onClick} = props;

    return (
        <img src={src}
             width={width}
             className={className}
             onClick={onClick}/>
    )
};


export {ImageView};
