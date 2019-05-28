import React from 'react';
import {BlockView} from "./block-view";
import PropTypes from "prop-types";

class Block extends React.Component {
    render() {
        const {props} = this,
            {className, children, gutter, background, border} = props,
            classNames = `app-block ${gutter ? `app-block-gutter-${gutter}` : ''}`;


        return (
            <BlockView {...props}
                       className={classNames}
                       border={border}
                       background={background}>
                {children}
            </BlockView>
        )
    }

    static defaultProps = {
        className: '',
    }
}

Block.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
export default Block;