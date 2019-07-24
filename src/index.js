import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './store/reducers';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
