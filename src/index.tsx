import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './firebase/index';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
