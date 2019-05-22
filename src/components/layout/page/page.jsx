import React from 'react';
import {PageView} from "./page-view";
import PropTypes from "prop-types";
import {Container, Row, Col} from 'react-grid-system';
import Text from "../../text/text";
import Card from "../../card/card";
import {CardTitle} from "../../card/card-utils/card-title";
import {CardSubtitle} from "../../card/card-utils/card-subtitle";
import {CardContent} from "../../card/card-utils/card-content";
import {CardImage} from "../../card/card-utils/card-image";

class Page extends React.Component {
    render() {
        const {props} = this,
            {className} = props,
            classNames = `app-page${className}`;


        return (
            <PageView {...props}
                      className={classNames}>
                {props.children}
            </PageView>
        )
    }

    static defaultProps = {
        className: ''
    }
}

Page.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    size: PropTypes.oneOf(['min', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max']),
    block: PropTypes.bool,
    link: PropTypes.bool,
};
export default Page;