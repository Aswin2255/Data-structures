let ar = [1,0,2,20,3]
function quick(ar){                   
    if(ar.length<2){                  
        return ar
    }
    let leftar = []
    let rightar = []
    let pivot = ar[ar.length-1]
    for(i=0;i<ar.length-1;i++){
         if(ar[i]<pivot){
            leftar.push(ar[i])
         }
         else{
            rightar.push(ar[i])
         }
    }
    return [...quick(leftar),pivot,...quick(rightar)]
}
let result = quick(ar)
console.log(result)