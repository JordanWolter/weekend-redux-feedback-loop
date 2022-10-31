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
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

const understanding = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}

const support = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default:
            return state;
    }
}

const comments = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return action.payload;
        default:
            return state
    };
};

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    })
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root')
);