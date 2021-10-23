import { createStore } from 'redux';
import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { firebaseAuth } from './firebase';
import { useDispatch } from 'react-redux';

import { Routes } from './routes';

import { login } from './app/store/actions/user';
import { store } from './app/store';
import { IUserState } from './app/store/reducers/user';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            dispatch(login(user as any));
        });
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes />
        </Suspense>
    );
}

export default App;
