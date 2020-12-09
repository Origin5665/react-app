import { createStore, combineReducers, applyMiddleware } from 'redux'
import profile from './reducers/profile';
import messager from './reducers/messager';
import users from './reducers/users';
import auth from './reducers/auth';
import init from './reducers/init';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { compose } from 'redux';

const reducers = combineReducers({
   profile,
   messager,
   users,
   auth,
   form,
   init
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store;
export default store;