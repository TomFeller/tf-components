import React from 'react';
import './card.css';
import {CardTitle} from "./card-utils/card-title";
import {CardSubtitle} from "./card-utils/card-subtitle";
import {CardContent} from "./card-utils/card-content";
import {CardImage} from "./card-utils/card-image";

const CardView = (props) => {
    const {className} = props,
        {title, subtitle, description, image, children} = props;


    return (
        <div className={`card ${className}`}
             style={props}>
            {title && <CardTitle>{title}</CardTitle>}
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
            {description && <CardContent>{description}</CardContent>}
            {image && <CardImage src={image}/>}
            {children && children}
        </div>
    )
};

export {CardView};
