import accessImmutableObject from './2-nested.js';
import { Map } from 'immutable';

describe('accessImmutableObject', () => {
  const testData = {
    name: {
      first: 'Guillaume',
      last: 'Salva',
    },
  };

  it('should return the correct string value at path', () => {
    expect(accessImmutableObject(testData, ['name', 'first'])).toBe('Guillaume');
  });

  it('should return undefined for non-existent path', () => {
    expect(accessImmutableObject(testData, ['name', 'middle'])).toBeUndefined();
  });

  it('should return a Map for an intermediate object path', () => {
    const result = accessImmutableObject(testData, ['name']);
    expect(Map.isMap(result)).toBe(true);
    expect(result.get('last')).toBe('Salva');
  });
});

