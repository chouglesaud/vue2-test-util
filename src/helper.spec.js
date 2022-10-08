import { sum } from './helper';

describe('helper.js', () => {
  it(' 2 + 2 should be 4 ', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
