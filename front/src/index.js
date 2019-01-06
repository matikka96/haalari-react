import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Posts from './Components/posts';
import Post from './Components/post';
import Form from './Components/form'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

ReactDOM.render((<BrowserRouter>
                    <App />
                </BrowserRouter>
                ), document.getElementById('root'));


serviceWorker.unregister();
