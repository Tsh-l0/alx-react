import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

const initialState = {
	filter: 'DEFAULT',
	notifications: []
};

export default function notificationReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				notifications: action.data.map((notif) => ({
					...notif,
					isRead: false
				}))
			};

		case MARK_AS_READ:
			return {
				...state,
				notifications: state.notifications.map((notif) =>
					notif.id === action.index
						? { ...notif, isRead: true }
						: notif
				)
			};

		case SET_TYPE_FILTER:
			return {
				...state,
				filter: action.filter
			};

		default:
			return state;
	}
}
