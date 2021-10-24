import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/user';
import { gamesReducer } from './reducers/games';
import { localReducer } from './reducers/local';
import { usersReducer } from './reducers/users';

const reducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    games: gamesReducer,
    local: localReducer,
});

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
