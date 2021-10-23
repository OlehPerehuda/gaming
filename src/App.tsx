import { createStore } from 'redux'
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { Routes } from './routes';

import { Header } from '../src/app/components/Header';

import { store } from './app/store';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Routes />
            </Suspense>
        </Provider>
    );
};

export default App;
