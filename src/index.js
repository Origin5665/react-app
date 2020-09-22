import store from './redux/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import { ContextStore, ProviderApp } from './ContextStore';





ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App state={store} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)




