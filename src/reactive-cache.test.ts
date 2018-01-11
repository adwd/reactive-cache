import { ReactiveCache } from './reactive-cache';

describe('ReactiveCache', () => {
  test('is instantiated', () => {
    const rc = new ReactiveCache();
    expect(rc).not.toBeNull();
  });
});
