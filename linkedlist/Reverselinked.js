class Node{
    constructor(data,next = null){
        this.data = data,
        this.next = next
    }
}
class linkedlist{
    constructor(){
        this.head = null,
        this.size = 0
    } 
    createnode(data){
        this.head = new Node(data,this.head)
        this.size ++
    }
    reversenode(){
        let prev = null
        let current = this.head
        let next
        while(current){
        
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
   
    printnode(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}
const n1 =  new linkedlist
n1.createnode(5)
n1.createnode(6)
n1.createnode(7)
n1.printnode()
//n1.reversenode()
console.log('------------------')
//n1.sorting()
//n1.printnode()

//console.log(n1)