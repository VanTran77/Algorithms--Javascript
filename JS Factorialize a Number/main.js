function factorialize(n){
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    console.log(result);
}
factorialize(0);
factorialize(5);
factorialize(10);
factorialize(20);