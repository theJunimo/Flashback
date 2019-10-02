import React from 'react';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import * as modules from 'store/modules';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';
import { default as ReduxThunk } from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';  

const pm = createPromise({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
});

let middleware;

if(process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middleware = composeWithDevTools(applyMiddleware(logger, ReduxThunk, pm));
} else {
    middleware = applyMiddleware(ReduxThunk, pm);
}

const reducers = combineReducers(modules);
const store = createStore(reducers, middleware);

const Root = () => {
    return (
            <Provider store = { store } >
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
    )
}

export default Root;