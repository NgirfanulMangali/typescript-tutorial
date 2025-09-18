<<<<<<< HEAD
function grabDoll(dolls){
  var bag=[];
  
  for ( var i=0; i <dolls.length ; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i])
=======
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
>>>>>>> 72472875c8471475da2bc6820f306d9bdcf0146d
    } else {
      continue;
    }
    if (bag.length === 3) {
      break
    }
  }
  
  return bag;
}

<<<<<<< HEAD
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]))
=======
console.log(padIt("a", 5)); // ***a**
>>>>>>> c0ff376138608ac53eb11c2a3a5971c96c3daefa
>>>>>>> 72472875c8471475da2bc6820f306d9bdcf0146d
