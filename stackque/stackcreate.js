// arry method
const stack = []
stack.push(5)                                             
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
console.log(stack[stack.length-1])
console.log(stack)

// linked list 

class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}
class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    push(value){
        this.head = new Node(value,this.head)
        this.size ++
    }
    pop(){
        let current = this.head
        this.head = current.next
        this.size --
    }
    peek(){
        if(this.head) {
            return this.head
        }
        else{
            return undefined
        }
    }
}
const l1 = new linkedlist
l1.push(5)
l1.push(10)
l1.push(15)
l1.pop()
console.log(l1.peek())
console.log(l1)

// using class

class stackclass{
    constructor(){
        this.items = [],
        this.size = 0
    }
    push(item){
        this.items[this.size] = item
        this.size ++
    }
    pop(){
        if(this.size === 0) return 'empty'
        let remove = this.items[this.size-1]
        delete this.items[this.size-1]
        this.size --
    }
    peek(){
        if(this.size === 0) return 'stack is empty'
        return this.items[this.size-1]
    }
    
}
const s1 = new stackclass
s1.push(10)
s1.push(100)
s1.push(150)
s1.pop()

console.log(s1.peek())
console.log(s1)
