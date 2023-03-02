let ar = [13,98]
let x = 13 , y = 98
let start = -1
let end = -1
for(i=0;i<ar.length;i++){           
    if(x === ar[i]){
        console.log(i)
        start = i
    }
}
for(i = ar.length-1;i>=0;i--){
    if(y === ar[i]){
        console.log(i)
        end = i
    }
}
console.log(start,end)
if(end || start <=-1){
    console.log('j')
    console.log(-1)

}
else{
    console.log(start,end)
    console.log(end-start)

    // INCOMPLETEEEEE 
}

