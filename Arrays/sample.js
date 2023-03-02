/*class Node{
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
    create(data){
          this.head = new Node(data,this.head)
          this.size ++
    }
    display(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    remove(data){
        let current = this.head
        while(current){
            if(current.data === data){
                current = current.next
                break;
            }
            current = current.next
        }

    }
}
const n1 = new linkedlist
let ar = [1,2,3,4,5]
for(i=0;i<ar.length;i++){
      n1.create(ar[i])
}
n1.display()*/

/*let ar = [1,2,3,4,5,6,7]
let target = 10
let start = 0
let end = ar.length-1
let mid = start + Math.floor((end-start/2))
while(start<=end){
    if(ar[mid]===target){
        console.log(mid)
        break;
    }
    if(ar[mid]<target){
        start = mid+1
    }
    else{
        end = mid-1
    }

}*/

let str = "hellow"
let newstr = ''
for(let i=str.length-1;i>=0;i--){
    newstr += str[i]

}
console.log(newstr)
