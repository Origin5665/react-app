import store from './redux/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './components/containers/AppContainer';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>,
     </React.StrictMode>,
    document.getElementById('root')
);




