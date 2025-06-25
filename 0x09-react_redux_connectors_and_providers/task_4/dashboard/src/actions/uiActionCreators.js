export const displayNotificationDrawer = () => ({
	type: 'SHOW_NOTIFICATION_DRAWER',
});

export const hideNotificationDrawer = () => ({
	type: 'HIDE_NOTIFICATION_DRAWER',
});

export const loginSuccess = () => ({
	type: 'LOGIN_SUCCESS',
});

export const loginFailure = () => ({
	type: 'LOGIN_FAILURE',
});

export const loginRequest = (email, password) => {
	return (dispatch) => {
		return fetch('/login-success.json')
			.then((res) => {
				if (!res.ok) {
					throw new Error('Login failed');
				}
				return res.json();
			})
			.then(() => dispatch(loginSuccess()))
			.catch(() => dispatch(loginFailure()));
	};
};
