var nonNumerics = [];

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function getRelationship(x, y) {

    for (var i = 0; i < arguments.length; i++) {
        if (isNumeric(arguments[i]) === false) {
            nonNumerics.push(arguments[i]);
        }
    }

    if (nonNumerics.length > 1) {
        return 'Can\'t compare relationships because "' + x + '"" and "' + y + '" are not numbers';
    } else if (nonNumerics.length === 1) {
        return 'Can\'t compare relationships because "' + nonNumerics[0] + '" is not a number';
    } else if (x < y) {
        // console.log(x + ' is > ' + y);
        var relationship = x + ' is LESS THAN ' + y;
        return relationship;
    } else if (x > y) {
        var relationship = x + ' is GREATER THAN ' + y;
        return relationship;
    } else if (x === y) {

        var relationship = x + ' is EQUAL TO ' + y;
        return relationship;
    }
}

var rel = getRelationship('hello', 'thatksjfkdj');

console.log(rel);
