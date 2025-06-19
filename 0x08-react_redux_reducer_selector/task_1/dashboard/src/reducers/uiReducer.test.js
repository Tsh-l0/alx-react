import { uiReducer, initialState } from './uiReducer';
import {
	DISPLAY_NOTIFICATION_DRAWER,
	SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer with Immutable Map', () => {
	it('returns initial state when no action is passed', () => {
		const state = uiReducer(undefined, {});
		expect(state.toJS()).toEqual(initialState.toJS());
	});

	it('returns initial state when unrelated action is passed', () => {
		const state = uiReducer(undefined, { type: SELECT_COURSE });
		expect(state.toJS()).toEqual(initialState.toJS());
	});

	it('sets isNotificationDrawerVisible to true', () => {
		const action = { type: DISPLAY_NOTIFICATION_DRAWER };
		const expected = initialState.set('isNotificationDrawerVisible', true);
		const state = uiReducer(undefined, action);
		expect(state.toJS()).toEqual(expected.toJS());
	});
});
