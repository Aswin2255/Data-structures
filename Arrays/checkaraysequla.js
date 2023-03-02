let ar1 = [1,2,3,4]
let ar2 = [4,1,2,3]
console.log(ar1.sort().join(','))
console.log(ar2.sort((a,b)=>a-b).join(',') === ar1.sort((a,b)=>a-b).join(','))

function check(ar1,ar2) {
    
    
}