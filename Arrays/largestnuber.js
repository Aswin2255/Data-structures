let ar = [7,1,5,3,6,4]
let largest = ar[0]
let smallest = ar[0]
for(i=1;i<ar.length;i++){
    if(ar[i]>largest){
        largest = ar[i]
    }
    else if (ar[i]<smallest){
        smallest = ar[i]

    }
}
console.log(largest,smallest)