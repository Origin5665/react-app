
import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './usersReduser';


const reducers = combineReducers({

    profile: profileReducer,
    dialogs: dialogsReducer,
    user: userReducer
});

const store = createStore(reducers);



















export default store;