import { Seq } from 'immutable';

/**
 * Filters students with score > 70 and capitalizes their names
 * @param {Object} object - Plain JS object with student data
 */
export default function printBestStudents(object) {
	const seq = Seq(object);

	const filtered = seq.filter((student) => student.score > 70);

	const capFirstLetter = (string) =>
		string.charAt(0).toUpperCase() + string.slice(1);

	const updated = filtered.map((student) => ({
		score: student.score,
		firstName: capFirstLetter(student.firstName),
		lastName: capFirstLetter(student.lastName),
	}));

	console.log(updated.toJS());
}
