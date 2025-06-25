import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear } from '../utils/utils';
import holberton_logo from '../assets/holberton_logo.jpg';

export function Header({ user, logout }) {
	return (
		<div className={css(styles.header)}>
			<img src={holberton_logo} className={css(styles.headerImg)} alt="logo" />
			<h1>School dashboard</h1>

			{user && (
				<p id="logoutSection" className={css(styles.logoutSection)}>
					Welcome <b>{user.email}</b>
					<span onClick={logout} className={css(styles.logoutSectionSpan)}>
						(logout)
					</span>
				</p>
			)}
		</div>
	);
}

Header.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func,
};

Header.defaultProps = {
	user: null,
	logout: () => {},
};

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		color: '#e01d3f',
		fontSize: '20px',
	},
	headerImg: {
		width: '200px',
	},
	logoutSection: {
		color: 'black',
		position: 'absolute',
		right: 0,
		paddingRight: '20px',
		alignSelf: 'flex-end',
	},
	logoutSectionSpan: {
		fontStyle: 'italic',
		cursor: 'pointer',
	},
});

export const mapStateToProps = (state) => ({
	user: state.get('user'),
});

export const mapDispatchToProps = {
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
