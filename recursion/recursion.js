function nonrecursive(n){
    let factorial = 1
    for(i=1;i<=n;i++){
       // console.log(factorial)
        factorial  = factorial * i
        //console.log (i)
       // console.log(factorial)
   }
   console.log(factorial)
}
//nonrecursive(3)
function recursive(n,factorial = 1){
    if(n<=0){
        //console.log('exit')
        return factorial
    }
    return recursive(n-1,factorial*n)
    
   
}
console.log(recursive(3))