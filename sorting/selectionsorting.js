let ar = [2,0,1]


for(let i= 0; i<ar.length;i++){
    let smalestindex = i
    for(let j=i+1;j<ar.length;j++){
        if(ar[smalestindex]>ar[j]){
            smalestindex = j
        }
    }
    let temp = ar[smalestindex]
    ar[smalestindex] = ar[i]
    ar[i] = temp
}
console.log(ar)