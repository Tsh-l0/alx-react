import notificationReducer from './notificationReducer';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

const mockData = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', value: 'New data available' }
];

describe('notificationReducer', () => {
	it('returns the default state', () => {
		expect(notificationReducer(undefined, {})).toEqual({
			filter: 'DEFAULT',
			notifications: []
		});
	});

	it('handles FETCH_NOTIFICATIONS_SUCCESS correctly', () => {
		const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: mockData };
		const result = notificationReducer(undefined, action);

		expect(result.notifications).toHaveLength(3);
		expect(result.notifications.every((n) => n.isRead === false)).toBe(true);
		expect(result.filter).toBe('DEFAULT');
	});

	it('handles MARK_AS_READ correctly', () => {
		const init = notificationReducer(undefined, {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data: mockData
		});

		const updated = notificationReducer(init, {
			type: MARK_AS_READ,
			index: 2
		});

		expect(updated.notifications.find((n) => n.id === 2).isRead).toBe(true);
		expect(updated.notifications.find((n) => n.id === 1).isRead).toBe(false);
	});

	it('handles SET_TYPE_FILTER correctly', () => {
		const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
		const result = notificationReducer(undefined, action);
		expect(result.filter).toBe('URGENT');
	});
});
