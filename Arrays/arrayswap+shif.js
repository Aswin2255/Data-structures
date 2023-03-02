let ar = [1,2,3,4,5,1,2,3,4,5,6]
let output = [6,1,2,3,4,5]
let tem
for(i=0;i<ar.length;i++){
    tem = ar[i]
    ar[i] = ar[ar.length-1]  
    ar[ar.length-1] = tem
}
console.log(ar)

let temp2
let ar2 = [1,2,3,4,5,6]
let o = [2,3,4,5,6,1]
for(i=ar2.length-1;i>0;i--){
    temp2 = ar2[0]
    ar2[0] = ar2[i]
    ar2[i] = temp2
}

console.log(ar2)



