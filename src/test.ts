export function countBy(x: number, n: number): number[] {

    for (let i = x; i < 10; i += n) {
        return [i]
    }

}
console.log(countBy(1, 10))