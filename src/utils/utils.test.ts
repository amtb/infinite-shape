import { mirror } from "./utils";

describe('Utils', () => {
  describe('mirror', () => {
    it('should mirror the array properly', () => {
      expect(mirror([])).toEqual([]);
      expect(mirror([1])).toEqual([1, 1]);
      expect(mirror([1, 2])).toEqual([1, 2, 2, 1]);
      expect(mirror([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4], [3, 4], [1, 2]]);
    });
  });
});
