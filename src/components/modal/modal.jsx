import React from 'react';
import {ModalView} from "./modal-view";
import PropTypes from "prop-types";

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: this.props.active
        }
    }

    closeModal = () => {

        const {toggle, animateDuration} = this.props;
        this.setState({
            isActive: false
        });
        setTimeout(toggle, animateDuration * 1000);
    };

    render() {
        const {isActive} = this.state;
        const {props} = this,
            {className, animate, animateDuration} = props,
            {title, subtitle, description, center, children} = props,
            {contentWidth, wrapperBg, contentBg, closeSymbol, toggle} = props,
            classNames = `${className}${animate ? `modal-animate modal-animate-${animate} ` : ''}${isActive ? 'active' : ''}`;

        return (
            <ModalView className={classNames}
                       close={animate ? this.closeModal : toggle}
                       contentWidth={contentWidth}
                       wrapperBg={wrapperBg}
                       contentBg={contentBg}
                       title={title}
                       subtitle={subtitle}
                       description={description}
                       animate={animate}
                       animateDuration={animate && animateDuration}
                       center={center}
                       closeSymbol={closeSymbol}>

                {children}

            </ModalView>
        )
    }

    static defaultProps = {
        contentWidth: 500,
        className: '',
        animateDuration: .5,
        closeSymbol: 'X'
    }
}

Modal.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    wrapperBg: PropTypes.string,
    contentBg: PropTypes.string,
    contentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    close: PropTypes.func,
    animate: PropTypes.oneOf(['fade', 'scale', 'slide-t', 'slide-r', 'slide-b', 'slide-l']),
    animateDuration: PropTypes.number,
    closeSymbol: PropTypes.oneOfType([PropTypes.string, PropTypes.element])

};
export default Modal;