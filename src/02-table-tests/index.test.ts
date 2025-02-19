// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 2, b: 2, action: Action.Subtract, expected: 0 },
    { a: 10, b: 5, action: Action.Subtract, expected: 5 },
    { a: 4, b: 1, action: Action.Subtract, expected: 3 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 5, b: 2, action: Action.Multiply, expected: 10 },
    { a: 1, b: 1, action: Action.Multiply, expected: 1 },
    { a: 8, b: 2, action: Action.Divide, expected: 4 },
    { a: 4, b: 2, action: Action.Divide, expected: 2 },
    { a: 2, b: 2, action: Action.Divide, expected: 1 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    { a: undefined, b: undefined, action: undefined, expected: null },
    { a: 5, b: 3, action: '@', expected: null },
    { a: 5, b: 3, action: undefined, expected: null },
    { a: 5, b: 3, action: '', expected: null },
    { a: '5', b: null, action: Action.Add, expected: null },
    { a: null, b: null, action: Action.Add, expected: null },
    { a: undefined, b: null, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`should ${action} ${a} and ${b} to equal ${expected}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });
});
