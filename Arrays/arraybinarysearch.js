let ar = [1,2,3,4,5,6]
let target = 4
let start = 0
let end = ar.length-1
let mid

while(start<=end){
    console.log('worked')
    mid = start + Math.floor((end-start)/2)
    console.log(mid)
    if(ar[mid]===target){
        console.log(mid)
        break;
    }
    else if(ar[mid]<target){
        start = mid +1
    }
    else{
        end = mid -1
    }


}

