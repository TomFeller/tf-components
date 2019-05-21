import React from 'react';
import './modal.css';

const ModalView = (props) => {
    const {close, className, animateDuration} = props,
        {wrapperBg, contentBg, contentWidth} = props,
        {title, subtitle, children} = props;

    return (
        <div className={`modal ${className}`}
             style={{backgroundColor: wrapperBg,
                 animationDuration: `${animateDuration}s`}}>

            <button className={'modal_close'} onClick={close}>X</button>

            <div className={'modal_content'}
                 style={{width: contentWidth, backgroundColor: contentBg}}>

                {title && <h2 className={'modal_title'}>{title}</h2>}
                {subtitle && <h4 className={'modal_subtitle'}>{subtitle}</h4>}

                {children && children}

            </div>
        </div>
    )
};

export {ModalView};
