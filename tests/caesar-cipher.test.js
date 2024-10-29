import { caesarCipher } from "../modules/caesar-cipher.js";

test('shifts letters correctly', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
    expect(caesarCipher('AbC', 3)).toBe('DeF');
});

test('ignores non-alphabetical characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// One concept of testing is that we don’t need to explicitly test every function we write, just the public ones.
// So in this case we only need tests for the final caesarCipher function. 
// If it works as expected we can be rest assured that our smaller helper functions are doing what they’re supposed to.