import {is} from 'immutable';

/**
 * Compares two Immutable.js Maps for deep equality.
 *
 * @param {Map} map1 - The first Immutable Map
 * @param {Map} map2 - The second Immutable Map
 * @return {boolean} - True if both Maps are equal
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
