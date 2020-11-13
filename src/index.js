import store from './redux/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import { ContextStore, ProviderApp } from './ContextStore';





ReactDOM.render(
    // <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <App state={store} />
        </Provider>
    </HashRouter>,
    // </React.StrictMode>,
    document.getElementById('root')

)




