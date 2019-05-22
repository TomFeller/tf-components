import React from 'react';
import './footer.css';

const FooterView = (props) => {
    const {className} = props,
        {padding, backgroundColor, color, fontSize, children} = props;

    return (
        <footer id={'app-footer'}
                className={className}
                style={{
                    padding: padding,
                    color: color,
                    backgroundColor: backgroundColor,
                    fontSize: fontSize
                }}>
            {children}
        </footer>
    )
};


export {FooterView};
