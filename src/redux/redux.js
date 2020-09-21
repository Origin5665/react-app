import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import userReducer from './reducers/usersReduser';


const reducers = combineReducers({

    profile: profileReducer,
    dialogs: dialogsReducer,
    user: userReducer
});

const store = createStore(reducers);



















export default store;