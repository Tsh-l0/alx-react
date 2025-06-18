import * as notificationsData from '../../notifications.json';

/**
 * Returns all context objects from notifications for a given user ID.
 * @param {string} userId - The author ID to filter by.
 * @returns {Array<Object>} - List of notification context objects.
 */
export const getAllNotificationsByUser = (userId) => {
	return notificationsData.default
	.filter(({ author }) => author.id === userId)
	.map(({ context }) => context);
};
