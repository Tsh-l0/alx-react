import { schema, normalize } from 'normalizr';

const notification = new schema.Entity('notifications');
const notificationList = [notification];

export const notificationsNormalizer = (data) =>
	normalize(data, notificationList);
