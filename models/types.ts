/**
 * Representation of the different types of pixels
 */
export enum Pixels {
  Spaces = 0,
  Dashes = 1,
  Pipes = 2
}

/**
 * Represents a line in the drawing
 */
export type Line = Pixels[];

/**
 * Represents the whole shape
 */
export type Shape = Line[];
