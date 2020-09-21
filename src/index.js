import store from './redux/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ContextStore from './ContextStore';



const renderer = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <ContextStore.Provider value={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </ContextStore.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
};

renderer(store.getState());

store.subscribe(() => {
    const state = store.getState()
    renderer(state);
})