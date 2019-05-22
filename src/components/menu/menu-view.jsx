import React from 'react';
import Button from "../button/button";
import './menu.css';

const MenuView = (props) => {
    const {items, className} = props;
    return (
        <div className={className}>
            {items.map((item, i) => {
                return (
                    <div className={'menu_item'} key={i}>
                        <Button link
                                value={item.label}
                                href={item.href}/>
                    </div>
                )
            })}
        </div>
    )
};


export {MenuView};
