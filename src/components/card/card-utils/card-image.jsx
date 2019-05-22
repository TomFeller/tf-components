import React from 'react';
import Image from "../../image/image";

export const CardImage = (props) => {
    return <Image src={props.src} className={'card_image'} block/>
};