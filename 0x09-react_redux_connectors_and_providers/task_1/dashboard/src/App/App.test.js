import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
	it('should return the correct props from state', () => {
		const state = fromJS({
			isUserLoggedIn: true,
			isNotificationDrawerVisible: true,
		});

		const expectedProps = {
			isLoggedIn: true,
			displayDrawer: true,
		};

		expect(mapStateToProps(state)).toEqual(expectedProps);
	});
});
