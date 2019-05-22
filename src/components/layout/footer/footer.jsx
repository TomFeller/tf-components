import React from 'react';
import {FooterView} from "./footer-view";
import PropTypes from "prop-types";

class Footer extends React.Component {
    render() {
        const {props} = this,
            {className} = props,
            classNames = `app-footer${className}`;


        return (
            <FooterView {...props}
                        className={classNames}>bla</FooterView>
        )
    }

    static defaultProps = {
        className: '',
        backgroundColor: '#333',
        color: '#fff',
    }
}

Footer.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    size: PropTypes.oneOf(['min', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max']),
    block: PropTypes.bool,
    link: PropTypes.bool,
};
export default Footer;