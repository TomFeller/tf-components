import React from 'react';
import Menu from "../../../menu/menu";

export const HeaderMenu = (props) => {
    const {items} = props;
    console.log(props)
    return (
        <Menu {...props} />
    )
};