const calculator = require('../../src/calculator');

describe('SMOKE_TEST', () => {
  test('1 + 1 equals 2', () => {
    expect(calculator.sum(1, 1)).toBe(2);
  });
});
