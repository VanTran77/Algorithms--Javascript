// Power N
// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
// powerN(3, 1) => 3
// powerN(3, 2) => 9
// powerN(3, 3) => 27

function power(base, exponent) {
    if (exponent == 0){
        return 1;
    }
    else {
        return base * power(base, exponent-1);
    }
}
console.log(power(3, 1));
console.log(power(3, 2));
console.log(power(3, 3));