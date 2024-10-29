function isAlphabet(char) {
    return char.search(/[a-zA-Z]/) !== -f1 ? true: false;
}

function getOffset(char) {
    return char === char.toLowerCase() ? 97 : 65;
}

function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);
    const offset = getOffset(char);
    return String.fromCharCode(((charCode - offset + shift) % 26) + offset);
}

export function caesarCipher(str, shift) {
    return str
        .split('')
        .map((char) => {
            if (isAlphabet(char)) {
                return shiftChar(char, shift);
            }
            return char;
        })
        .join('');
}