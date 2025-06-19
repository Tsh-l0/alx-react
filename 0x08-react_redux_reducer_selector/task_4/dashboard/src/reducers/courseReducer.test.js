import courseReducer, { initialState } from './courseReducer';
import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE
} from '../actions/courseActionTypes';

const data = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 }
];

describe('courseReducer (with Immutable + Normalizr)', () => {
	it('returns initial state', () => {
		const state = courseReducer(undefined, {});
		expect(state.toJS()).toEqual({});
	});

	it('handles FETCH_COURSE_SUCCESS', () => {
		const state = courseReducer(undefined, {
			type: FETCH_COURSE_SUCCESS,
			data
		});
		expect(state.get('1').toJS()).toEqual({
			id: 1,
			name: 'ES6',
			credit: 60,
			isSelected: false
		});
	});

	it('handles SELECT_COURSE and UNSELECT_COURSE', () => {
		let state = courseReducer(undefined, {
			type: FETCH_COURSE_SUCCESS,
			data
		});

		state = courseReducer(state, { type: SELECT_COURSE, index: 2 });
		expect(state.getIn(['2', 'isSelected'])).toBe(true);

		state = courseReducer(state, { type: UNSELECT_COURSE, index: 2 });
		expect(state.getIn(['2', 'isSelected'])).toBe(false);
	});
});
