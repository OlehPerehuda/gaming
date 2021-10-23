import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import { userReducer } from './reducers/user';
import { gamesReducer } from './reducers/games';
const reducer = combineReducers({
    user: userReducer,
    games: gamesReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
