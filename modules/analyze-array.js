export function analyzeArray(arr) {
    if (arr.length === 0) return { average: null, min: null, max: null, length: 0 };
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { average, min, max, length: arr.length };
}
