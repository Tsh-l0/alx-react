import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from '../actions/courseActionTypes';

export default function courseReducer(state = [], action) {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			return action.data.map((course) => ({
				...course,
				isSelected: false,
			}));

		case SELECT_COURSE:
			return state.map((course) =>
				course.id === action.index
					? { ...course, isSelected: true }
					: course
			);

		case UNSELECT_COURSE:
			return state.map((course) =>
				course.id === action.index
					? { ...course, isSelected: false }
					: course
			);

		default:
			return state;
	}
}
