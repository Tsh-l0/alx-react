import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

// Enable Redux DevTools Extension if available, otherwise fallback to default compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with middleware and DevTools support
const store = createStore(uiReducer, composeEnhancers(applyMiddleware(thunk)));

// Create the Redux store with uiReducer
store.dispatch({ type: 'LOGIN' });
store.dispatch({ type: 'SHOW_NOTIFICATION_DRAWER' });

// Render the App with the Redux Provider
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
