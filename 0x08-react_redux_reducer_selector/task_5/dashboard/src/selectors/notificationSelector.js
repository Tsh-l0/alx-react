export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotifications = (state) =>
	state.get('notifications').filter((n) => !n.get('isRead'));
