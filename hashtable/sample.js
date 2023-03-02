const ar = [1,2,56,7,8,90,100]
const ar2 = ["hellow","hiii","abcde"]
console.log(Math.min.apply(Math,ar))
let smallest = ar[0]
for(let i=0;i<ar.length;i++){
      if(ar[i]<smallest){
        smallest = ar[i]
      }
}
console.log(smallest)
const concat = ar2.reduce((i,s)=>{
    return s + i
})
console.log(concat)
const newarray = 'aswin'
const aray22 = 'aswin'
const hashmap = {}
for(let i=0;i<newarray.length;i++){
    if(!hashmap[newarray[i]]){
        hashmap[newarray[i]] = true    
    }
}
for(let i=0;i<aray22.length;i++){
    if(!hashmap[aray22[i]]){
        console.log('not equal')
        break;
    }
    else{
        console.log('equal')
    }

}
const a = [2,0,0,3,0,4,0,53]
let mid = Math.floor(a.length/2)
for(let i=0;i<a.length;i++){
    if(a[i]===0){
        for(j=a.length-1;j>=mid;j--){
            if(a[j]!=0){
            temp = a[j]
            a[j] = a[i]
            a[i] = temp
            }
        }
    }
}
console.log(a)
let array = [1,2]
for (var index = 0; index < array.length; index++) {
    setTimeout(() => {
        console.log(index)
    }, 1000);
    console.log('hii')
    
}
console.log(null==undefined)

