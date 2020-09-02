
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



const renderer = (state) => {
    console.log(state)
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    )
};

renderer(store.getState());
store.subscribe(renderer);