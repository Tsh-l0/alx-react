// App.js
import React from 'react';
import { connect } from 'react-redux';

export function App({ isLoggedIn }) {
	return (
		<div>
			<h1>Dashboard</h1>
			{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
		</div>
	);
}

export const mapStateToProps = (state) => ({
	isLoggedIn: state.get('isUserLoggedIn'),
});

export default connect(mapStateToProps)(App);
