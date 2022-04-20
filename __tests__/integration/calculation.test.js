const calculator = require('../../src/calculator');

describe('SMOKE_TEST', () => {
  test('sum of two equal sums should be multiple of either one', () => {
    const sum1 = calculator.sum(1, 1);
    const multiple1 = calculator.multiply(2, 2);
    expect(calculator.sum(sum1, sum1)).toBe(multiple1);
  });
});
