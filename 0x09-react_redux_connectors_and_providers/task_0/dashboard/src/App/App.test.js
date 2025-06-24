import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
	it('should return the correct isLoggedIn prop from state', () => {
		const state = fromJS({
			isUserLoggedIn: true
		});

		const expectedProps = {
			isLoggedIn: true
		};

		expect(mapStateToProps(state)).toEqual(expectedProps);
	});
});
