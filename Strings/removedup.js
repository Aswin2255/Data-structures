let str = 'hhee'
let result = ''
for(let i = 0 ; i< str.length;i++){
    if(result.indexOf(str[i]) === -1){
        result += str[i]
    }

}
console.log(result)
