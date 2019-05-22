import React from 'react';

export const HeaderLogo = (props) => {
    const {logo} = props;
    return (
        <div className={'header_logo'}>{logo}</div>
    )
};