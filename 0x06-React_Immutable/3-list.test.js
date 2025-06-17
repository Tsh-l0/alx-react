import { List } from 'immutable';
import { getListObject, addElementToList } from './3-list';

describe('Immutable List Operations', () => {
  describe('getListObject', () => {
    it('should convert array to immutable List', () => {
      const array = [1, 2, 3];
      const result = getListObject(array);
      
      expect(List.isList(result)).toBe(true);
      expect(result.size).toBe(3);
      expect(result.get(0)).toBe(1);
    });

    it('should return empty List for empty array', () => {
      const result = getListObject([]);
      expect(List.isList(result)).toBe(true);
      expect(result.size).toBe(0);
    });
  });

  describe('addElementToList', () => {
    it('should add string element to List', () => {
      const originalList = List(['first', 'second']);
      const result = addElementToList(originalList, 'third');
      
      expect(List.isList(result)).toBe(true);
      expect(result.size).toBe(3);
      expect(result.get(2)).toBe('third');
      // Verify original list wasn't modified
      expect(originalList.size).toBe(2);
    });

    it('should handle adding to empty List', () => {
      const originalList = List();
      const result = addElementToList(originalList, 'new item');
      
      expect(result.size).toBe(1);
      expect(result.get(0)).toBe('new item');
    });
  });
});
