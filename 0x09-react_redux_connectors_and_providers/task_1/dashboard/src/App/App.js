// App.js
import React from 'react';
import { connect } from 'react-redux';

export function App({ isLoggedIn, displayDrawer }) {
	return (
		<div>
			<h1>Dashboard</h1>
			{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
			{displayDrawer ? (
				<div className="drawer">🔔 Notifications Drawer</div>
			) : (
				<p>No notifications</p>
			)}
		</div>
	);
}

export const mapStateToProps = (state) => ({
	isLoggedIn: state.get('isUserLoggedIn'),
	displayDrawer: state.get('isNotificationDrawerVisible'),
});

export default connect(mapStateToProps)(App);
