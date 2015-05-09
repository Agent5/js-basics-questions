// OPTIONAL CHALLENGE QUESTION #1

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRelationship(x, y) {
    // Your code goes here!
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