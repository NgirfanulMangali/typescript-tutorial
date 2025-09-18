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
