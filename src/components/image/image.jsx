import React from 'react';
import {ImageView} from "./image-view";
import PropTypes from "prop-types";

class Image extends React.Component {
    render() {
        const {props} = this,
            {className, src} = props,
            {size, block} = props,
            classNames = `img${size ? `img-${size}` : ''}${block ? ' img-block' : ''} ${className}`;


        return (
            <ImageView {...props}
                       className={classNames}
                       src={src}/>
        )
    }

    static defaultProps = {
        className: '',
        value: 'click',
        backgroundColor: '#333',
        color: '#fff'
    }
}

Image.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    size: PropTypes.oneOf(['min', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max']),
    block: PropTypes.bool,
    link: PropTypes.bool,
};
export default Image;