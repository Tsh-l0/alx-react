import { uiReducer, initialState } from './uiReducer';
import {
	DISPLAY_NOTIFICATION_DRAWER,
	SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
	it('returns initial state when no action is passed', () => {
		expect(uiReducer(undefined, {})).toEqual(initialState);
	});

	it('returns initial state when unrelated action is passed', () => {
		expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual(initialState);
	});

	it('sets isNotificationDrawerVisible to true', () => {
		const action = { type: DISPLAY_NOTIFICATION_DRAWER };
		const newState = uiReducer(undefined, action);
		expect(newState.isNotificationDrawerVisible).toBe(true);
	});
});
