class Node{
    constructor(data,next = null){
        this.data = data,
        this.next = next

    }
}
class linkedlist {
    constructor(){
        this.head = null
        this.size = 0
    }
    append(data){    // adding element at the end of the list
        if(!this.head){
            this.head = new Node(data,this.head)
            this.size ++
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            console.log(current)
            current.next = new Node(data)
            this.size ++
        }
    } 
    prepend(data){  // adding element at the begining og the list
        this.head = new Node(data,this.head)
        this.size ++
    }
    printdata(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    insertmiddle(data){
        let node =  new Node(data)
        let slow = this.head
        let fast = this.head
        let prev = null
        if(!this.head){
            this.head = node
        }
        else{
          while(fast!=null && fast.next !=null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
          }
          prev.next = node
          node.next = slow
          this.size ++
        }
       
    }
    inseratindex(data,index){
        let node = new Node (data)
        let current = this.head
        let prev = null
        if(index === 1){
            this.head = node
            node.next = current
            this.size ++
            return
        }
        else if(index<=0){
            return false
        }
        while(index-1){
            prev = current
            current = current.next
            index --
        }
      
       prev.next = node
       node.next = current
       this.size ++
    }
    rembegining(){       // delete from begining
        let current = this.head
        let next = current.next
        this.head = next
        this.size --
    } 
    remend(){    //delete from end

        let current = this.head
        let prev = null
        while(current.next){
            prev = current
            current = current.next
        }
        prev.next = current.next
        this.size --

     
    }
    remeindex(index){
        let prev = null
        let current = this.head
        if(index === 1){
            this.head = current.next
            return
        }
        while(index-1){
            prev = current
            current = current.next
            index --
        }
        prev.next = current.next
        this.size --
    }
    
}
const n1 = new linkedlist()
n1.append(4)
n1.append(5)
n1.append(6)
/*n1.prepend(10)
n1.prepend(100)*/
n1.insertmiddle(6)
n1.insertmiddle(600)
n1.insertmiddle(800)
n1.insertmiddle(900)

n1.rembegining()

n1.inseratindex(1,3)
n1.remend()
n1.printdata()
n1.remeindex(3)
n1.printdata()