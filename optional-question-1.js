function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRelationship(x, y) {
    // Your code goes here!

    if (!isNumeric(x)) {
      if (!isNumeric(y)) {
        return "Can't compare relationships because " + x + " and " + y + " are not numbers";
      }
      return "Can't compare relationships because " + x + " is not a number";
    } else if (!isNumeric(y)) {
      return "Can't compare relationships because " + y + " is not a number";
    } else if (x === y) {
      return "The two values are equal";
    } else if (x < y) {
      return x + " is LESS THAN " + y;
    } else if (x > y) {
      return x + " is GREATER THAN " + y;
    } 
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));