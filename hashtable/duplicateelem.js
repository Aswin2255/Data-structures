const ar = [1,2,3,4,2,3,3,4,5,67,9,0]
const hash = {}
const dup = []
for(let i = 0;i<ar.length;i++){
    if(!hash[ar[i]]){
        hash[ar[i]] = 1
    }
    else{
        let value = hash[ar[i]]
        hash[ar[i]] = value+1
       if(hash[ar[i]]===2){
        dup.push(ar[i])
       }
    }
    
}
console.log(hash)
console.log(dup)

