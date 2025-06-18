import { map, map2 } from './4-mutations.js';

describe('Immutable Map Mutations', () => {
  it('should not modify the original map', () => {
    expect(map.get('2')).toBe('Noah');
    expect(map.get('4')).toBe('Oliver');
  });

  it('should reflect changes in map2', () => {
    expect(map2.get('2')).toBe('Benjamin');
    expect(map2.get('4')).toBe('Oliver');
  });

  it('should share unchanged entries', () => {
    expect(map2.get('1')).toBe(map.get('1'));
    expect(map2.get('6')).toBe('Lucas');
  });

  it('should be different references', () => {
    expect(map2).not.toBe(map);
  });
});

