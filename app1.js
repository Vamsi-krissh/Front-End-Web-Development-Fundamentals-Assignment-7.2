 function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
 console.log(
sumAll(1, 5, 52, 100, 300));
    