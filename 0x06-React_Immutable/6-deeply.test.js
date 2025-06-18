it('should deeply merge nested structures and return a Map', () => {
  const result = mergeDeeplyElements(page1, page2);

  expect(Map.isMap(result)).toBe(true);

  const user1 = result.get('user-1');
  expect(user1.get('id')).toBe(1);
  expect(user1.get('name')).toBe('test');
  expect(user1.get('likes').get('1').get('uid')).toBe(1234);
  expect(user1.get('likes').get('2').get('uid')).toBe(134);
});

