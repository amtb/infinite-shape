import { isEven, isLessThan, validate } from "./validators";

describe('Validators', () => {
  it('validate the parameters correctly', () => {
    expect(validate(0, 0, 0).length).toBe(3);
    expect(validate(1, 1, 1).length).toBe(6);
    expect(validate(20, 20, 4).length).toBe(0);
  });

  describe('Helpers', () => {
    describe('isEven', () => {
      it('should be an even number', () => {
        expect(isEven(0)).toBe(true);
        expect(isEven(2)).toBe(true);
      });

      it('should be an odd number', () => {
        expect(isEven(3)).toBe(false);
      });
    });

    describe('isLessThan', () => {
      const isLessThanFive = isLessThan(5);
      it('should be less than 5', () => {
        expect(isLessThanFive(4)).toBe(true);
      });

      it('should not be less than 5', () => {
        expect(isLessThanFive(5)).toBe(false);
        expect(isLessThanFive(6)).toBe(false);
      });
    });
  });
});
