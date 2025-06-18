import mergeDeeplyElements from './6-deeply.js';
import { Map, List } from 'immutable';

describe('mergeDeeplyElements', () => {
  const page1 = {
    'user-1': {
      id: 1,
      name: 'test',
      likes: {
        1: { uid: 1234 },
      },
    },
  };

  const page2 = {
    'user-1': {
      likes: {
        2: { uid: 134 },
      },
    },
  };

  it('should deeply merge nested structures and return a List of values', () => {
    const result = mergeDeeplyElements(page1, page2);

    expect(List.isList(result)).toBe(true);

    const user1 = result.get(0); // First and only user
    expect(user1.get('id')).toBe(1);
    expect(user1.get('name')).toBe('test');
    expect(user1.get('likes').get('1').get('uid')).toBe(1234);
    expect(user1.get('likes').get('2').get('uid')).toBe(134);
  });
});

