import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { firebaseAuth } from './firebase';
import { Routes } from './routes';
import { getUserInfo } from './app/store/actions/user';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            dispatch(getUserInfo(user?.uid));
        });
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes />
        </Suspense>
    );
}

export default App;
