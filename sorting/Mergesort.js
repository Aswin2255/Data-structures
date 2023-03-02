let ar = [4,5,6,7,2,1,10]
function mergesort(ar){
   // console.log(ar)
    if(ar.length<2){
        return ar                                                                       
    }
  
    let mid = Math.floor(ar.length/2)
    const left = ar.slice(0,mid)
    const rights = ar.slice(mid)
    

 // console.log(left,rights)
  return merge(mergesort(left),mergesort(rights))

}
function merge(left,right){
    const sorted = []
    while(left.length&&right.length){
        console.log(left,right)
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }
        else{
            sorted.push(right.shift())
        }
    }   
   return  [...sorted,...left,...right]
}
let result = mergesort(ar)
console.log(result)



