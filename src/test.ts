export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
    const s = new Set(iterable);
    const arr = [...s];
    return arr
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'))