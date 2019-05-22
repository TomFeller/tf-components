import React from 'react';
import './modal.css';
import Text from "../text/text";

const ModalView = (props) => {
    const {close, closeSymbol} = props,
        {className, animateDuration} = props,
        {wrapperBg, contentBg, contentWidth} = props,
        {title, subtitle, description, center, children} = props;

    return (
        <div className={`modal ${className}`}
             style={{backgroundColor: wrapperBg, animationDuration: `${animateDuration}s`}}>
            <div className={'modal_close'}
                 onClick={close}>
                {closeSymbol}
            </div>
            <div className={'modal_content'}
                 style={{width: contentWidth, backgroundColor: contentBg, textAlign: center && 'center'}}>
                {title && <Text tag={2} className={'modal_title'}>{title}</Text>}
                {subtitle && <Text tag={4} className={'modal_subtitle'}>{subtitle}</Text>}
                {description && <Text tag={'p'} className={'modal_description'}>{description}</Text>}
                {children && children}
            </div>
        </div>
    )
};

export {ModalView};
