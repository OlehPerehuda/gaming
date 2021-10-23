import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import { userReducer } from './reducers/user';
const reducer = combineReducers({
    userReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
