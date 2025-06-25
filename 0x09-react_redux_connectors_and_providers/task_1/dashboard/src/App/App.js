// App.js
import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

export function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) {
	return (
		<div>
			<h1>Dashboard</h1>
			{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}

			{displayDrawer ? (
				<div className="drawer">
				🔔 Notifications Drawer
				<button onClick={hideNotificationDrawer}>Hide Drawer</button>
				</div>
			) : (
				<button onClick={displayNotificationDrawer}>Show Notifications</button>
			)}
		</div>
	);
}

export const mapStateToProps = (state) => ({
	isLoggedIn: state.get('isUserLoggedIn'),
	displayDrawer: state.get('isNotificationDrawerVisible'),
});

// Using object shorthand syntax
export const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
};

export default connect(mapStateToProps)(App);
