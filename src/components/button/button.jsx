import React from 'react';
import {ButtonView} from "./button-view";
import PropTypes from "prop-types";

class Button extends React.Component {
    render() {
        const {props} = this,
            {className, children, value} = props,
            {size, block} = props,
            classNames = `${className}button button-${size}${block ? ' button-block' : ''}`;

        return (
            <ButtonView {...props}
                        className={classNames}
                        value={children ? children : value}/>
        )
    }

    static defaultProps = {
        className: '',
        value: 'click',
        backgroundColor: '#333',
        color: '#fff',
        size: 'md'
    }
}

Button.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    size: PropTypes.oneOf(['min', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max']),
    block: PropTypes.bool
};
export default Button;