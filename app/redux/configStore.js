import { createStore, combineReducers,applyMiddleware } from 'redux';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { LOGOUT } from './actions/actionTypes';
import loginReducer from './reducers/loginReducer';

const appReducer = combineReducers({
    login : loginReducer,
})


const rootReducer = (state,action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }

  return appReducer(state,action)
}


let middleware = [thunk];

if (__DEV__) {
//   const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}



const configStore = createStore(rootReducer,applyMiddleware(...middleware))

export default configStore;