import { Map, fromJS } from 'immutable';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
	filter: 'DEFAULT',
	notifications: {}
});

export default function notificationReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS: {
			const normalized = notificationsNormalizer(action.data);
			const entities = normalized.entities.notifications || {};
			const notifications = Object.keys(entities).reduce((acc, key) => {
				acc[key] = { ...entities[key], isRead: false };
				return acc;
			}, {});
			return state.set('notifications', fromJS(notifications));
		}

		case MARK_AS_READ:
			return state.setIn(['notifications', String(action.index), 'isRead'], true);

		case SET_TYPE_FILTER:
			return state.set('filter', action.filter);

		default:
			return state;
	}
}
