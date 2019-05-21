import React from 'react';
import {ModalView} from "./modal-view";

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: this.props.active
        }
    }

    closeModal = () => {
        this.setState({
            isActive: false
        });
        setTimeout(this.props.toggle, this.props.animateDuration * 1000);
    };

    render() {
        const {isActive} = this.state;
        const {props} = this,
            {className, animate, animateDuration} = props,
            {title, subtitle, children} = props,
            {contentWidth, wrapperBg, contentBg} = props,
            classNames = `${className}${animate ? `modal-animate modal-animate-${animate} ` : ''}${isActive ? 'active' : ''}`;

        return (
            <ModalView className={classNames}
                       close={animate ? this.closeModal : props.toggle}
                       contentWidth={contentWidth}
                       wrapperBg={wrapperBg}
                       contentBg={contentBg}
                       title={title}
                       subtitle={subtitle}
                       animate={animate}
                       animateDuration={animate && animateDuration}>

                {children}

            </ModalView>
        )
    }

    static defaultProps = {
        contentWidth: 500,
        wrapperBg: '#000000',
        contentBg: '#ffffff',
        className: '',
        animateDuration: .5
    }
}

export default Modal;