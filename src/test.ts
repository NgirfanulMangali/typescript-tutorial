function animal(obj) {
  return (`This ${obj.color} ${obj.name} has ${obj.legs} legs.`);
}

console.log(animal({ color: "white", name: "dog", legs: 4}))