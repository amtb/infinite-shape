import { Shape } from '../models';
import rawJsonData = require('../test_data.json');
import { drawShape } from './drawer';

interface RawTestCase {
  input: string;
  pixelArrayJson: string;
}

interface FormattedTestCase {
  width: number;
  height: number;
  padding: number;
  result: Shape;
}

/**
 * Converts a raw test case taken from the test_data.json to a more structured one
 */
function convertRawTestCase(rawTestCase: RawTestCase): FormattedTestCase {
  const [width, height, padding] = rawTestCase.input.split(',').map(Number);
  const result = JSON.parse(rawTestCase.pixelArrayJson) as Shape;
  return {width, height, padding, result};
}

describe('Drawer', () => {
  const testCases = (rawJsonData as RawTestCase[]).map(convertRawTestCase);

  describe.each(testCases)('from test_data.json', (testCase: FormattedTestCase) => {
    const {width, height, padding, result} = testCase;
    it(`it should draw ${width}, ${height}, ${padding} correctly`, () => {
      const drawn = drawShape(width, height, padding);
      expect(drawn).toEqual(result);
    });
  });

});
