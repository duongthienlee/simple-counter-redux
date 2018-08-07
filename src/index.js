import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';
import { HashRouter, Route } from "react-router-dom"

const render = () => ReactDOM.render(<HashRouter><Route exact path="/" component={App} /></HashRouter>, document.getElementById('root'));
render();
registerServiceWorker();
store.subscribe(render);
