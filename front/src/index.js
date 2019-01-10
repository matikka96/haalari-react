import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

ReactDOM.render((<BrowserRouter>
                    <App />
                </BrowserRouter>
                ), document.getElementById('root'));


serviceWorker.unregister();
