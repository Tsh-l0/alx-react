import { List, Map } from 'immutable';

/**
 * Converts two arrays into a single immutable List
 * @param {Array} page1 - First array
 * @param {Array} page2 - Second array
 * @returns {List} - Combined immutable List
 */
export const concatElements = (page1, page2) => List(page1).concat(List(page2));

/**
 * Merges two objects into one Immutable Map
 * If keys overlap, values from page2 take precedence
 * @param {Object} page1 - First object
 * @param {Object} page2 - Second object
 * @returns {Map} - Merged Immutable Map
 */
export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
