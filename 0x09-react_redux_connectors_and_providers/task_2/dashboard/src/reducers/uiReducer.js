const initialState = {
	isLoggedIn: false,
	isNotificationDrawerVisible: false,
	user: null,
};

export default function uiReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN' :
			return {
				...state,
				isLoggedIn: true,
				user: action.user,
			};
		case 'LOGOUT':
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		case 'SHOW_NOTIFICATION_DRAWER':
			return { ...state, isNotificationDrawerVisible: true };
		case 'HIDE_NOTIFICATION_DRAWER':
			return { ...state, isNotificationDrawerVisible: false };
		default:
			return state;
	}
}
