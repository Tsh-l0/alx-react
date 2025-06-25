// App.js
import React from 'react';
import PropTypes from 'prop-types';
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
// Define expected props
App.propTypes = {
	isLoggedIn: PropTypes.bool,
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func,
};

// Set default values for props
App.defaultProps = {
	isLoggedIn: false,
	displayDrawer: false,
	displayNotificationDrawer: () => {},
	hideNotificationDrawer: () => {},
};

export const mapStateToProps = (state) => ({
	isLoggedIn: state.get('isUserLoggedIn'),
	displayDrawer: state.get('isNotificationDrawerVisible'),
});

// Using object shorthand syntax
export const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
