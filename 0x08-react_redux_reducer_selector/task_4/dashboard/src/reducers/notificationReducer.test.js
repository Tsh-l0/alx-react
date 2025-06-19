import notificationReducer from './notificationReducer';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

const data = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', value: 'New data available' }
];

describe('notificationReducer (with Immutable + Normalizr)', () => {
	it('returns initial state', () => {
		const state = notificationReducer(undefined, {});
		expect(state.toJS()).toEqual({
			filter: 'DEFAULT',
			notifications: {}
		});
	});

	it('handles FETCH_NOTIFICATIONS_SUCCESS', () => {
		const state = notificationReducer(undefined, {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data
		});
		expect(state.getIn(['notifications', '2', 'isRead'])).toBe(false);
	});

	it('handles MARK_AS_READ', () => {
		let state = notificationReducer(undefined, {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data
		});

		state = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
		expect(state.getIn(['notifications', '2', 'isRead'])).toBe(true);
	});

	it('handles SET_TYPE_FILTER', () => {
		const state = notificationReducer(undefined, {
			type: SET_TYPE_FILTER,
			filter: 'URGENT'
		});
		expect(state.get('filter')).toBe('URGENT');
	});
});
