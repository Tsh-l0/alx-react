import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

// Create the Redux store with uiReducer
const store = createStore(uiReducer);
store.dispatch({ type: 'LOGIN' });
store.dispatch({ type: 'SHOW_NOTIFICATION_DRAWER' });

// Render the App with the Redux Provider
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
