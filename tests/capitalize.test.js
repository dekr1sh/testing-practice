import {capitalize} from "../modules/capitalize.js";

test('capitalizes the first character of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('returns an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
});