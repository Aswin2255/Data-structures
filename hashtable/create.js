class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }
        else{
            this.table[index].push([key,value])
        }
       
    }
    get(key){
        let index = this.hash(key)
        return this.table[index].find(x=>x[0]===key)
    }
    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
           
        }
    }
}
const l1 = new Hashtable(40)

l1.set('name','aswin')
l1.set('mane',12)
l1.set('age',120)
console.log(l1.get('name'))
l1.display()
