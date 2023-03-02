let ar = [1,2,3,4,5,6]
let targetsum = 3


for(i=0;i<ar.length-1;i++){
    for(j=i+1;j<ar.length;j++){
        if(ar[i]+ar[j]===targetsum){
            console.log(ar[i],ar[j])
            break;
        }
    }
}

// duplicate element 

let a = [1,1,2,2,3,3,4,5]
console.log(a.indexOf(8))
let output = [1,2,3,4,5]
let result = []
for(i=0;i<a.length;i++){
    if(result.indexOf(a[i])===-1){
        console.log(result.indexOf(a[i]))
        result.push(a[i])
    }
}
console.log(result)
[1,4,4,4]
