import { Map } from 'immutable';
import getImmutableObject from './0-fromjs';

describe('getImmutableObject', () => {
  it('should convert plain object to immutable Map', () => {
    const plainObject = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132
    };

    const immutableMap = getImmutableObject(plainObject);

    // Check it's an Immutable Map
    expect(Map.isMap(immutableMap)).toBe(true);

    // Check size
    expect(immutableMap.size).toBe(4);

    // Check some values
    expect(immutableMap.get('fear')).toBe(true);
    expect(immutableMap.get('smell')).toBe(-1033575916.9145899);
    expect(immutableMap.get('wall')).toBe(false);
    expect(immutableMap.get('thing')).toBe(-914767132);

    // Log the output to see the structure
    console.log(immutableMap);
  });
});
