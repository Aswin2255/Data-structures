class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}
class linkedlist{
    constructor(){
        this.head = null,
        this.size = null
    }
    createanode(data){
        this.head = new Node(data,this.head)
        this.size ++
    }
}
function check (l1,l2){
    console.log(l1.head.data)
    while(l1 != null && l2 != null){
        if(l1.head.data != l2.head.data){
            console.log('entered')
            console.log('not equal')
            return
        }
        l1 = l1.next
        l2 = l2.next
    }
    console.log('equal')
}

const l1 = new linkedlist
const l2 = new linkedlist
l1.createanode(5)
l1.createanode(10)
l2.createanode(5)
l2.createanode(10)

check(l1,l2)