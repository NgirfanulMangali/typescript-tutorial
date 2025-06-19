export function findAverage(array: number[]): number {
    if (array.length === 0) {
        return 0;
    }
    const total = array.reduce((acc, current) => {
        return acc + current;
    })
    const average = total / array.length;

    return average;
}

console.log(findAverage([1, 2, 3]))