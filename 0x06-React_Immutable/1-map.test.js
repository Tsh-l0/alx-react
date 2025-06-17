import { Map } from 'immutable';
import getImmutableObject from './1-map';

describe('getImmutableObject', () => {
  it('should convert plain object to immutable Map', () => {
    const plainObject = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132
    };

    const immutableMap = getImmutableObject(plainObject);

    // Verify it's an Immutable Map
    expect(Map.isMap(immutableMap)).toBe(true);
    
    // Verify size
    expect(immutableMap.size).toBe(4);
    
    // Verify values
    expect(immutableMap.get('fear')).toBe(true);
    expect(immutableMap.get('smell')).toBe(-1033575916.9145899);
    expect(immutableMap.get('wall')).toBe(false);
    expect(immutableMap.get('thing')).toBe(-914767132);
  });
});
