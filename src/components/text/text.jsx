import React from 'react';
import {TextView} from "./text-view";
import PropTypes from "prop-types";
import {H1, H2, H3, H4, H5, H6, Paragraph, Span} from "./tags/text-tag";

class Text extends React.Component {
    render() {
        const {props} = this,
            {className, children, value, center, align} = props,
            {tag} = props,
            classNames = `text ${center ? `text-center` : ''} ${align ? `text-${align}` : ''} ${className}`;
        let Tag = '';

        switch (tag) {
            case (1) :
                Tag = H1;
                break;
            case (2) :
                Tag = H2;
                break;
            case (3) :
                Tag = H3;
                break;
            case (4) :
                Tag = H4;
                break;
            case (5) :
                Tag = H5;
                break;
            case (6) :
                Tag = H6;
                break;
            case ('p') :
                Tag = Paragraph;
                break;
            case ('s') :
                Tag = Span;
                break;
            default:
                Tag = Paragraph
        }

        return (
            <TextView {...props}
                      Tag={Tag}
                      className={classNames}
                      value={children ? children : value}/>
        )
    }

    static defaultProps = {
        className: '',
        tag: 'p'
    }
}

Text.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'p', 'span']),
};
export default Text;