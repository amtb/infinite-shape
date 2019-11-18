import { Line, Pixels, Shape } from "../models/types";

function renderPixel (pixel: Pixels): string | undefined {
  switch (pixel) {
    case Pixels.Dashes:
      return '-';
    case Pixels.Pipes:
      return '|';
    case Pixels.Spaces:
      return ' ';
  }
}

/**
 * Renders a given shape in the console
 * @param shape the shape we want to render
 */
export function renderShape (shape: Shape): void {
  const picture = shape.map(
    (line: Line) => line.map(renderPixel)
  );

  picture
    .map((line) => line.join(''))
    // tslint:disable-next-line: no-console
    .forEach((line) => console.log(line));
}
