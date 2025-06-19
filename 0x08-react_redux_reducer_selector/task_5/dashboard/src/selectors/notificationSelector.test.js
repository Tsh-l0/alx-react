import { fromJS } from 'immutable';
import {
	filterTypeSelected,
	getNotifications,
	getUnreadNotifications
} from './notificationSelector';

const mockState = fromJS({
	filter: 'DEFAULT',
	notifications: {
		1: { id: 1, type: 'default', value: 'New course available', isRead: false },
		2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
		3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
	}
});

describe('notificationSelector', () => {
	it('filterTypeSelected returns correct filter', () => {
		expect(filterTypeSelected(mockState)).toBe('DEFAULT');
	});

	it('getNotifications returns all notifications', () => {
		const result = getNotifications(mockState);
		expect(result.size).toBe(3);
		expect(result.get('2').get('value')).toBe('New resume available');
	});

	it('getUnreadNotifications returns only unread notifications', () => {
		const result = getUnreadNotifications(mockState);
		expect(result.size).toBe(2);
		expect(result.has('1')).toBe(true);
		expect(result.has('3')).toBe(true);
		expect(result.has('2')).toBe(false);
	});
});
