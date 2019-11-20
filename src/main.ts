import { drawShape } from "./drawer";
import { renderShape } from "./utils";

[[20, 40, 6], [60, 60, 10], [80, 20, 16]].forEach((input) => {
  const [w, h, p] = input;
  // tslint:disable-next-line: no-console
  console.log(input.join());
  const shape = drawShape(w, h, p);
  renderShape(shape);
});
