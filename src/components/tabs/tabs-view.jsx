import React from 'react';
import './tabs.css';

const TabsView = (props) => {
    const {className, items, activeItem, debug, goToIndex} = props;

    return (
        <div className={`tabs ${className} ${debug ? 'tabs-debug' : ''}`}>
            <div className={'tabs_wrapper'}>


                <div className={'tabs_header'}>
                    {items.map((item, i) => {
                        const itemClass = activeItem === i ? ' tabs_header_item-active' : '';
                        return (
                            <div key={i}
                                 className={`tabs_header_item${itemClass ? itemClass : ''}`}
                                 onClick={() => goToIndex(i)}>
                                {item}
                            </div>
                        )
                    })}
                </div>

                <div className={'tabs_content'}>
                    {items.map((item, i) => {
                        const itemClass = activeItem === i ? ' tabs_item-active' : ''

                        return (
                            <div key={i} className={`tabs_item${itemClass ? itemClass : ''}`}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export {TabsView};
