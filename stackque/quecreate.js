// using array methode 
const que = []
que.push(1) // enque
que.push(23)
que.push(100) 
que.shift()  //deque
console.log(que)

// using class
 class queclass{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enque(value){
        this.storage[this.tail] = value
        this.tail ++
    }
    deque(){
        if(this.tail === 0) return 'que is empty'
         delete this.storage[this.head]
         this.head ++
    }
 }
 const n1 = new queclass
 n1.enque(100)
 n1.enque(200)
 n1.deque()
 n1.enque(1000)
 n1.deque()
 console.log(n1)

 //using linked list 

 class Node{
    constructor(data,next=null){
        this.data = data,
        this.next = next
    }
 }
 class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    enque(value){
        if(!this.head){
            this.head = new Node(value)
            return true
        }
        let current = this.head
        while(current.next){
             current = current.next
        }
        current.next = new Node(value)
        this.size ++
    }
    deque(){
        let current = this.head
        this.head = current.next
        this.size --
    }
    peek(){
        return this.head
    }
 }

 const l1 = new linkedlist
 l1.enque(120)
 l1.enque(220)
 console.log(l1)
 console.log(l1.peek())