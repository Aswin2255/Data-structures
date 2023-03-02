/*class Node{
    constructor(data,next=null,prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}
class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    createnode(data){
      let newnode = new Node(data)
      if(!this.head){
        this.head = newnode
        this.tail = newnode
      }
      else{
        this.head.prev = newnode
        newnode.next = this.head
        this.head = newnode
      }
    }
}
const n1 = new linkedlist
n1.createnode(4)
n1.createnode(49)
//n1.createnode(50)
console.log(n1)*/

class Node{
  constructor(data,prev=null,next=null){
    this.data = data,
    this.prev = prev,
    this.next = next
  }
}
class doublylinkedlist{
  constructor(){
    this.head = null,
    this.tail = null
  }
  append(data){
    let node = new Node(data)
    if(!this.head){
      this.head = node
      this.tail = node
    }
    else{
      let temp = this.tail
      node.prev = temp
      temp.next = node
      
    }
  }
  prepend(data){
    let node = new Node(data)
    if(!this.head){
      this.head = node
      this.tail = node
    }
    else{
      let temp = this.head
      node.next = temp
      temp.prev = node
      this.head = node
      
    }
  }
}
const n1 = new doublylinkedlist

n1.prepend(100)
n1.append(500)
console.log(n1)