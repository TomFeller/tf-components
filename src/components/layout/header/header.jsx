import React from 'react';
import {HeaderView} from "./header-view";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        const {props} = this,
            {className, children, fixed, flex} = props,
            classNames = `app-header header ${flex ? 'header-flex' : ''} ${fixed ? 'header-fixed' : ''} ${className}`;


        return (
            <HeaderView {...props}
                        className={classNames}>
                {children}
            </HeaderView>
        )
    }

    static defaultProps = {
        className: '',
        backgroundColor: '#333',
        color: '#fff',
    }
}

Header.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    size: PropTypes.oneOf(['min', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max']),
    block: PropTypes.bool,
    link: PropTypes.bool,
};
export default Header;