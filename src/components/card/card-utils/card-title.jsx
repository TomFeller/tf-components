import React from 'react';
import Text from "../../text/text";

export const CardTitle = (props) => {
    const tag = props.tag ? props.tag : 3;
    return <Text tag={tag} className={'card_title'}>{props.children}</Text>
};