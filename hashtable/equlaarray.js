const a = [1,1,1,1,1]
const b = [1,1,1,1,5]
const hashtable = {}
if(a.length!=b.length){
    console.log('array is not equal')
    return false
}
for(let i=0;i<a.length;i++){
    if(!hashtable[a[i]]){
        hashtable[a[i]] = true
    }
}
for(let j=0;j<b.length;j++){
    if(!hashtable[b[j]]){
           console.log('not equal')
           break;
    }
    else{
        console.log('eqaul')
    }
}
console.log(hashtable)