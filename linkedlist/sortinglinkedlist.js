class Node{
    constructor(data,next=null){
        this.data = data,
        this.next = next
    }
}
class linkedlist{
    constructor(){
        this.head = null,
        this.size = 0
    }
    prepend(data){
        this.head = new Node(data,this.head)
    }
    print(data){
        let current = this.head
        while (current){
            console.log(current.data)
            current = current.next
        }
    }
    bubblesort(){
       let current = this.head
       let next = null
       while(current){
           next = current.next
           while(next){
            if(current.data>next.data){
                 let temp = current.data
                 current.data = next.data
                 next.data = temp
                
            }
            next = next.next
           }
           current = current.next
       }
       
    }
    quicksort(){
        let current = this.head
    }
   
  
}


const li = new linkedlist
li.prepend(500)
li.prepend(8)
li.prepend(59)
li.prepend(50)
li.bubblesort()
console.log(li)
li.print()