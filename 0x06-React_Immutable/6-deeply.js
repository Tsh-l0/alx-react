import {Map} from 'immutable';

/**
 * Deeply merges two plain JavaScript objects using Immutable.js,
 * combining nested properties, and returns a List of the resulting values.
 *
 * @param {Object} page1 - The first object to merge
 * @param {Object} page2 - The second object to merge
 * @return {Map} - Immutable Map with deeply merged values
 */
export default function mergeDeeplyElements(page1, page2) {
  // eslint-disable-next-line new-cap
  return Map(page1).mergeDeep(Map(page2));
}
