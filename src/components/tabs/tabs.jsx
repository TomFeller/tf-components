import React from 'react';
import {TabsView} from "./tabs-view";
import PropTypes from "prop-types";

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 0,
        };
    }

    goToIndex = (index) => {

        this.setState({
            activeItem: index
        });

    };

    render() {
        const {props, state} = this,
            {className} = props,
            {activeItem} = state,
            classNames = `${className}`;

        return (
            <TabsView {...props}
                      activeItem={activeItem}
                      goToIndex={this.goToIndex}
                      className={classNames}/>
        )
    }

    static
    defaultProps = {
        className: '',
    }
}

Tabs.propTypes = {
    className: PropTypes.string,
    speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])


};
export default Tabs;