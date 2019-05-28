import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import { setConfiguration } from 'react-grid-system';
import {setVariables} from './components/style/variables';

setConfiguration({
    defaultScreenClass: 'xl',
    breakpoints:     [576, 768, 992, 1200],
    containerWidths: [540, 750, 960, 1140],
    gutterWidth: 30,
    gridColumns: 12,
});

const styleVariables = setVariables({
    guttersWidth: 30,
    fontSize: 12
});

ReactDOM.render(<App {...styleVariables} debug/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
