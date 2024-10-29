import {reverseString} from "../modules/reverse-string.js";

test('reverses a single word', () => {
    expect(reverseString('hello')).toBe('olleh');
});