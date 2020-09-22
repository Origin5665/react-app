import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({

    profile: profileReducer,
    dialogs: dialogsReducer,
    user: userReducer,
    users: usersReducer
});

const store = createStore(reducers);



















export default store;