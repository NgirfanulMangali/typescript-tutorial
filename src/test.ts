export function binaryArrayToNumber(arr: number[]): number {

    const invite = arr.join("")
    const result = parseInt(invite, 2)
    return result
};
console.log(binaryArrayToNumber([1, 1, 1, 1]))
