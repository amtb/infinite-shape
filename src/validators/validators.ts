/**
 * Validates the input parameters
 * @param width
 * @param height
 * @param padding
 */
export function validate(width: number, height: number, padding: number): string[] {
  const errors = [];

  const isLessThenTwenty = isLessThan(20);

  if (isLessThenTwenty(width)) {
    errors.push(getErrorMessage('width', '>= 20'));
  }

  if (!isEven(width)) {
    errors.push(getErrorMessage('width', 'even'));
  }

  if (isLessThenTwenty(height)) {
    errors.push(getErrorMessage('height', '>= 20'));
  }

  if (!isEven(height)) {
    errors.push(getErrorMessage('height', 'even'));
  }

  if (isLessThan(4)(padding)) {
    errors.push(getErrorMessage('padding', '>= 4'));
  }

  if (!isEven(padding)) {
    errors.push(getErrorMessage('padding', 'even'));
  }

  return errors;
}

/**
 * Checks if the given number is even (without using a lib)
 * @param num the number to check
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Returns a function that checks if a number is less than the given min
 * @param min
 */
export function isLessThan(min: number): (num: number) => boolean {
  return (num: number) => (num < min);
}

/**
 * Builds an error message following the patter `Invalid x - should be y`
 * @param parameter
 * @param expected
 */
export function getErrorMessage(parameter: string, expected: string): string {
  return `Invalid ${parameter} - should be ${expected}`;
}
