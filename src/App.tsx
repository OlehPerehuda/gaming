import './App.scss';

import { Routes } from './routes';
import {Header} from '@components/Header'

function App() {
    return (
            <section className="app">
                <section className="app__wrapper">
                    <Header />
                    <Routes />
                </section>
            </section>

    );
}

export default App;
