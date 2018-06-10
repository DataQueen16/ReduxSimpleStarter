import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import SeriesList from './components/SeriesList/index';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
