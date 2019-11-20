/**
 * Mirrors a given array
 * @param array
 */
export function mirror<T>(array: T[]): T[] {
  if (array && array.length) {
    return [
      ...array,
      ...array.reverse()
    ];
  }

  return array;
}