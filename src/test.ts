export function accum(s: string): string {
    const chars = s.split("");
    const mapped = chars.map((char, index) => {
        return char.toLocaleUpperCase() + char.toLocaleLowerCase().repeat(index);
    })
    return mapped.join("-");
}
console.log(accum("abcd"))
