import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers/userReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({

    profile: profileReducer,
    dialogs: dialogsReducer,
    user: userReducer,
    users: usersReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;