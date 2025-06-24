// App.js
import React from 'react';
import { connect } from 'react-redux';

function App({ isLoggedIn }) {
	return (
		<div>
			<h1>Dashboard</h1>
			{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.ui.isLoggedIn,
});

export default connect(mapStateToProps)(App);
