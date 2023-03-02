/*let n = 5
let output = [0,1]
let result = 0
for(let i=2;i<5;i++){
    result = output[i-1] + output [i-2]
    output.push(result)
}

console.log(output)*/

function fibonaci(n){
    
    if(n<2){
        return n
    }
    return  fibonaci(n-1) + fibonaci(n-2)
}


console.log(fibonaci(4))

let ar = [1,2,3,4,5,6,7,8]

function binary(ar,target,start = 0,end = ar.length-1){
   console.log(start,end)
   
    if(start>end){
        return -1
    }
     mid = start + Math.floor((end-start)/2)
    
    if(ar[mid]===target){
        return mid
    }
     if(ar[mid]<target){
        return binary(ar,target,mid+1)
    }
    
        return binary(ar,target,start,mid-1)

}
let target = 7

console.log(binary(ar,target))
