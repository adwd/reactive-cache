import { ReactiveCache } from './reactive-cache';

interface Todo {
  text: string;
  done: boolean;
}

class TestCache extends ReactiveCache<Todo> {

}

describe('ReactiveCache', () => {
  test('is instantiated', () => {
    const rc = new TestCache();
    expect(rc).not.toBeNull();
  });
});
