import React from 'react';
import './modal.css';

const ModalView = (props) => {
    const {close, closeSymbol} = props,
        {className, animateDuration} = props,
        {wrapperBg, contentBg, contentWidth} = props,
        {title, subtitle, center, children} = props;

    return (
        <div className={`modal ${className}`}
             style={{
                 backgroundColor: wrapperBg,
                 animationDuration: `${animateDuration}s`
             }}>

            <div className={'modal_close'}
                    onClick={close}>
                {closeSymbol}
                </div>

            <div className={'modal_content'}
                 style={{width: contentWidth, backgroundColor: contentBg, textAlign: center && 'center'}}>

                {title && <h2 className={'modal_title'}>{title}</h2>}
                {subtitle && <h4 className={'modal_subtitle'}>{subtitle}</h4>}

                {children && children}

            </div>
        </div>
    )
};


export {ModalView};
