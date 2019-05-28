import React from 'react';
import {SliderView} from "./slider-view";
import PropTypes from "prop-types";

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 0,
            animating: false
        };
    }

    startSliding = () => {
        this.setState({
            animating: true
        })
    };

    stopSliding = () => {
        this.setState({
            animating: false
        })
    };

    next = () => {
        if (this.state.animating) return;
        this.startSliding();

        const {activeItem} = this.state,
            {items, speed} = this.props,
            nextActive = activeItem === items.length - 1 ? 0 : activeItem + 1;

        this.setState({
            activeItem: nextActive
        });
        setTimeout(this.stopSliding, speed * 1000);
    };

    prev = () => {
        if (this.state.animating) return;

        this.startSliding();

        const {activeItem} = this.state,
            {items, speed} = this.props,
            nextActive = activeItem === 0 ? items.length - 1 : activeItem - 1;

        this.setState({
            activeItem: nextActive
        });

        setTimeout(this.stopSliding, speed * 1000);
    };

    goToIndex = (index) => {
        if (this.state.animating) return;
        this.startSliding();
        const {speed} = this.props;

        this.setState({
            activeItem: index
        });
        setTimeout(this.stopSliding, speed * 1000);
    };

    render() {
        const {props, state} = this,
            {className, items,} = props,
            {activeItem} = state,
            classNames = `${className}`;

        return (
            <SliderView {...props}
                        activeItem={activeItem}
                        nextItem={activeItem + 1 === items.length ? 0 : activeItem + 1}
                        prevItem={activeItem < 1 ? items.length - 1 : activeItem - 1}
                        next={this.next}
                        prev={this.prev}
                        goToIndex={this.goToIndex}
                        className={classNames}/>
        )
    }

    static
    defaultProps = {
        className: '',
        speed: .3,
    }
}

Slider.propTypes = {
    className: PropTypes.string,
    speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])


};
export default Slider;