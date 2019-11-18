import { Line, Pixels, Shape } from "../models";
import { mirror } from "../utils";
import { validate } from "../validators";

/**
 * Draws a shape from the given inputs
 * @param width
 * @param heigth
 * @param padding
 */
export function drawShape(width: number, heigth: number, padding: number): Shape {
  const drawing: Shape = [];
  const errors = validate(width, heigth, padding);

  if (errors.length) {
    // tslint:disable-next-line: no-console
    errors.forEach(console.error);
    return drawing;
  }

  const [halfPadding, halfHeight] = [padding, heigth].map((num) => num / 2);

  // pipes and spaces pattern
  const pipes = drawLineOfPixels(1, Pixels.Pipes);
  const spaces = drawLineOfPixels(halfPadding, Pixels.Spaces);

  // let's compute the upper half of the drawing
  let depth = 1;
  while (drawing.length < halfHeight) {

    const halfWidth = width / 2;

    // compute the number of '-' given the depth
    const dashes = drawLineOfPixels(halfWidth - depth, Pixels.Dashes);

    // "prefix" of the lines pipes + (padding/2) * spaces
    // this border "grows" as we go in depth
    const borders = Array(depth - 1).fill([...pipes, ...spaces]).flat();

    // Left side of the line
    const halfLine =  [...borders, Pixels.Pipes, ...dashes];

    // repeat the line with it symetry
    const filledLine = mirror(halfLine);

    // replace all the dashes by spaces for the padding lines
    const paddingLine = filledLine.map((pixel) => pixel === Pixels.Dashes ? Pixels.Spaces : pixel);

    if (dashes.length > 2) {
      // draw a filled line + (padding/2) * pqddding lines
      drawing.push(filledLine);
      for (let i = 0; i < halfPadding && drawing.length < halfHeight; i++) {
        drawing.push(paddingLine);
      }
    }
    // last lines / end of the pattern
    else {
      // we still have some '-' to add
      if (dashes.length) {
        drawing.push(filledLine);
      }

      // fill with padding lines
      while (drawing.length < halfHeight) {
        drawing.push(paddingLine);
      }
    }

    // reduce the width and increase the depth
    width -= padding;
    depth += 1;
  }

  // repeat the drawing with it symetry
  return mirror(drawing);
}

/**
 * Draws a line of the given length with the type of pixels in input
 */
export function drawLineOfPixels(length: number, type: Pixels): Line {
  return length > 0 ? Array(length).fill(type) : [];
}
