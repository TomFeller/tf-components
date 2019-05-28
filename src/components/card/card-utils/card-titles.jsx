import React from 'react';
import {CardTitle, CardSubtitle} from "./card-utils";

export const CardTitles = ({props, title, subtitle, center}) => {
    return (
        <div className={'card_titles'}>
            <CardTitle center={center}>{title}</CardTitle>
            <CardSubtitle center={center}>{subtitle}</CardSubtitle>
        </div>
    )
};