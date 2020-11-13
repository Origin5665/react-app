import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers/userReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';

import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/appReducer';
import { compose } from 'redux'
import profileDataReducer from './reducers/profileDataRedicer';
const reducers = combineReducers({

    profile: profileReducer,
    dialogs: dialogsReducer,
    user: userReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    // profileData: profileDataReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


// const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;