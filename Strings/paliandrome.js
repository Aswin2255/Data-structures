let ar = 'aaba'
let flag = 1
let mid = Math.floor(ar.length/2)
console.log(mid)
for(let i = 0 ;i<mid;i++){
    if(ar[i] !== ar[ar.length - 1 -i]){
        flag = 0
        break;
    }
}
if(flag === 0){
    console.log('not p')
}
else{
    console.log('p')
}