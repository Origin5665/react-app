import { combineReducers } from 'redux';
/* Reducers */
import profile from './profile';
import messager from './messager';
import users from './users';
import auth from './auth';
import init from './init';
import { reducer as form } from 'redux-form';


type rootReducerType = typeof rootReducer;
export type rootStateType = ReturnType<rootReducerType>


const rootReducer = combineReducers({ profile, messager, users, auth, init, form });
export default rootReducer;