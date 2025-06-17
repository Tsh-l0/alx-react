import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an immutable Map using Immutable.js's fromJS
 * @param {Object} object - The plain JS object to convert
 * @returns {Map} - The immutable Map
 */
function getImmutableObject(object) {
	return fromJS(object);
}

export default getImmutableObject;
