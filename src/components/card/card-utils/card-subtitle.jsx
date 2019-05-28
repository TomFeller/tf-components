import React from 'react';
import Text from "../../text/text";

export const CardSubtitle = (props) => {
    const tag = props.tag ? props.tag : 5;
    return <Text tag={tag} className={'card_subtitle'} align={props.center && 'center'}>{props.children}</Text>
};