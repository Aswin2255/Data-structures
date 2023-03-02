class trie{
    constructor(){
        this.root = new Map()
    }
    insert(input){
        let current = this.root
        for(const char of input){
            if(!current.has(char)){
                current.set(char,new Map)
            }
            current = current.get(char)
        }
        current.set('end',true)
    }
    search(string){
        let current = this.root
        for(const char of string){
            if(!current.has(char)){
                return false
            }
            else{
                current = current.get(char)
            }
        }
        return current.has('end')
    }
    
}
const t1 = new trie
t1.insert('abc')

console.log(t1.search('ab'))