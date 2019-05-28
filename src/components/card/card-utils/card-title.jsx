import React from 'react';
import Text from "../../text/text";

export const CardTitle = (props) => {
    const tag = props.tag ? props.tag : 3;
    return <Text tag={tag} className={'card_title'} align={props.center && 'center'}>{props.children}</Text>
};