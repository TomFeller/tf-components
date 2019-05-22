import React from 'react';
import {CardView} from "./card-view";
import PropTypes from "prop-types";

class Card extends React.Component {
    render() {
        const {props} = this,
            {className} = props,
            {children} = props,
            classNames = `${className}`;

        return (
            <CardView {...props}
                      className={classNames}>
                {children}
            </CardView>
        )
    }

    static defaultProps = {
        className: '',
        animateDuration: .5,
        closeSymbol: 'X'
    }
}

Card.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
};

export default Card;