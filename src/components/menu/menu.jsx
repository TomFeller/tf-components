import React from 'react';
import {MenuView} from "./menu-view";
import PropTypes from "prop-types";

class Menu extends React.Component {
    render() {
        const {props} = this,
            {className, dir} = props,
            classNames = `menu${dir ? ` menu-${dir}` : ''} ${className}`;


        return (
            <MenuView {...props}
                      className={classNames}/>
        )
    }

    static defaultProps = {
        className: '',
        value: 'click',
        backgroundColor: '#333',
        color: '#fff'
    }
}

Menu.propTypes = {
    className: PropTypes.string,
    dir: PropTypes.oneOf(['x', 'y'])
};
export default Menu;