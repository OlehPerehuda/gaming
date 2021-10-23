import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
console.log(process, process?.env);

import './firebase/index';
import App from './App';
import './index.scss';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
