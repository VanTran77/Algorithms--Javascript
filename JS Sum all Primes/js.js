// ----------------- Sum All Primes --------------------------- //
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. 
// For example, 2 is a prime number because it's only divisible by one and two.

function sumPrimes(n){
    if (n > 2){
       let sum = 2;
       for(let i=3; i<=n; i++){
            if(i%2 != 0){
               if(isPrime(i)){
                   sum += i; 
               }
           }
       }
       return sum;
    //    console.log(sum);
   } else {
       console.log("Prime number should be > 1");
   }
}

function isPrime(num){
   for(let j=2; j<num; j++){
       if (num%j === 0) {
           return false
       }
   }
   return true;

}
// sumPrime(977);
console.log(sumPrimes(977));