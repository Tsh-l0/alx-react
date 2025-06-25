import uiReducer from './uiReducer';

describe('uiReducer', () => {
	it('returns default state with unknown action', () => {
		expect(uiReducer(undefined, {})).toEqual({
			isLoggedIn: false,
			isNotificationDrawerVisible: false,
			user: null,
		});
	});

	it('handles LOGIN and stores user info', () => {
		const result = uiReducer(undefined, {
			type: 'LOGIN',
			user: { email: 'pule@alx.com' },
		});

		expect(result.isLoggedIn).toBe(true);
		expect(result.user).toEqual({ email: 'pule@alx.com' });
	});

	it('handles LOGOUT and resets user info', () => {
		const result = uiReducer(
			{
				isLoggedIn: true,
				isNotificationDrawerVisible: true,
				user: { email: 'pule@alx.com' },
			},
			{ type: 'LOGOUT' }
		);
		expect(result.isLoggedIn).toBe(false);
		expect(result.user).toBeNull();
	});
});
