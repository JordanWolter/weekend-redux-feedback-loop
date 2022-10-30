import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


registerServiceWorker();

const feeling = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        default:
            return state
    }
}

const storeInstance = createStore(
    combineReducers({
        feeling,
    })
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root')
);