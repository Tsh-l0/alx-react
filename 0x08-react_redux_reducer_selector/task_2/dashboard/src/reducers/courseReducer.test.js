import courseReducer from './courseReducer';
import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const initialCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

describe('courseReducer', () => {
	it('returns an empty array as default state', () => {
		expect(courseReducer(undefined, {})).toEqual([]);
	});

	it('handles FETCH_COURSE_SUCCESS correctly', () => {
		const action = {
			type: FETCH_COURSE_SUCCESS,
			data: initialCourses,
		};

		const expected = initialCourses.map((course) => ({
			...course,
			isSelected: false,
		}));

		expect(courseReducer([], action)).toEqual(expected);
	});

	it('handles SELECT_COURSE correctly', () => {
		const fetchAction = {
			type: FETCH_COURSE_SUCCESS,
			data: initialCourses,
		};

		const state = courseReducer([], fetchAction);

		const selectAction = {
			type: SELECT_COURSE,
			index: 2,
		};

		const updatedState = courseReducer(state, selectAction);

		expect(updatedState[1].isSelected).toBe(true);
		expect(updatedState[0].isSelected).toBe(false);
		expect(updatedState[2].isSelected).toBe(false);
	});

	it('handles UNSELECT_COURSE correctly', () => {
		const fetchAction = {
			type: FETCH_COURSE_SUCCESS,
			data: initialCourses,
		};

		let state = courseReducer([], fetchAction);

		// First, select course 2
		state = courseReducer(state, { type: SELECT_COURSE, index: 2 });

		// Then unselect it
		const unselectAction = {
			type: UNSELECT_COURSE,
			index: 2,
		};

		const updatedState = courseReducer(state, unselectAction);

		expect(updatedState[1].isSelected).toBe(false);
	});
});
