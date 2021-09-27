function checkPrime(num){
    let i;
    var flag = 0;
    for(i=2; i<num; i++){
        // console.log(i, num%i);
        if(num%i == 0){
            return "Not Prime Number";
        }
    }
    return "Prime Number";
}

var result = checkPrime(19);

console.log(result);