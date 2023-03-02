let a = [10,9,6,7,5]

for(i=1;i<=a.length-1;i++){
    
  for(j=i;j>0;j--){
    if(a[j]<a[j-1]){
        temp = a[j-1]
        a[j-1] = a[j]
        a[j] = temp
    }
  }

}
console.log(a)
