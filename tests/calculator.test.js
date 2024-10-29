import { calculator } from "../modules/calculator.js";

test('adds two numbers', () => {
    expect(calculator.add(3, 2)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('returns error for division by zero', () => {
    expect(calculator.divide(10, 0)).toBe('Error');
});