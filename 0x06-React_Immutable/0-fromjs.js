import {fromJS} from 'immutable';

/**
 * Converts a plain JavaScript object into an immutable Map
 * using Immutable.js's fromJS
 * @param {Object} object - The plain JS object to convert
 * @return {Map} - The immutable Map
 */
export default function getImmutableObject(object) {
	return fromJS(object);
}
