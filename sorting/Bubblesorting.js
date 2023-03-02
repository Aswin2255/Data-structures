let a = [3,2,1,5]
let output = [1,3,4,5,12,98,100]
for(i=0;i<a.length;i++){
    for(j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            temp = a[j]
            a[j]=a[j+1]
            a[j+1] = temp
        }
    
    }
    
}
console.log(a)
