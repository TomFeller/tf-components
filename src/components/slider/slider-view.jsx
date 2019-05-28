import React from 'react';
import './slider.css';

const SliderView = (props) => {
    const {className, items, activeItem, nextItem, prevItem, noArrows, speed, debug} = props,
        {prev, next, startSliding, endSliding} = props;

    return (
        <div className={`slider ${className} ${debug ? 'slider-debug' : ''}`}>
            <div className={'slider_wrapper'}>

                {!noArrows && <div onClick={prev}>A</div>}

                <div className={'slider_content'}>
                    {items.map((item, i) => {
                        const itemClass =
                            activeItem === i ? ' slider_item-active' :
                                prevItem === i ? ' slider_item-prev' :
                                    nextItem === i && ' slider_item-next';

                        return (
                            <div key={i} className={`slider_item${itemClass ? itemClass : ''}`}
                            style={{transitionDuration: `${speed}s`}}>
                                {item}
                            </div>
                        )
                    })}
                </div>

                <div className={'slider_indicators'}>
                    <ul>
                        {items.map((item, i) => {
                           return (
                               <li key={i} className={'slider_indicators_item'} onClick={() => props.goToIndex(i)}/>
                           )
                        })}

                    </ul>
                </div>
                {!noArrows && <div onClick={next}>A</div>}
            </div>
        </div>
    )
};

export {SliderView};
