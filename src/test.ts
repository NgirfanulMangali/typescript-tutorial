function howManydays(n){
  // getDay() is a method of Date() - we will learn this later
  
  switch (n){
    case 1:
      return 31
    case 3:
      return 31
    case 5:
      return 31
    case 7:
      return 31
    case 8:
     return 31
    case 10:
      return 31
    case 12:
      return 31
    case 4:
      return 30
    case 6:
      return 30
      case 9:
      return 30
      case 11:
      return 30
      case 2:
      return 28
  }
  
}
console.log(howManydays(2))