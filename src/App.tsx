import React from 'react';
import { Suspense } from 'react';

import { Routes } from './routes';
import { Header } from './app/components/Header';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes />
        </Suspense>
    );
}

export default App;
