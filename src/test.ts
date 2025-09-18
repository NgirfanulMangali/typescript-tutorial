<<<<<<< HEAD
function pickIt(arr) {
    let odd = [], even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return [odd, even];
}

console.log(pickIt([1, 2])); // [[1], [2]]
=======
function padIt(str, n) {
  var num = 0;
  do {
    if (num % 2 === 0) {
      // kalau genap → taruh di kiri
      str = "*" + str;
    } else {
      // kalau ganjil → taruh di kanan
      str = str + "*";
    }
    num++;
  } while (num < n)
  return str;
}

console.log(padIt("a", 5)); // ***a**
>>>>>>> c0ff376138608ac53eb11c2a3a5971c96c3daefa
