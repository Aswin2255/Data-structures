class Node{
    constructor(value){
        this.value = value,
        this.right = null,
        this.left = null
    }
}
class bt {
    constructor(){
        this.root = null
    }
    insertone(value){
        const newnode = new Node(value)
        if(this.root === null){
              this.root = newnode
        }
        else{
              this.insertrecursive(this.root,newnode)
        }
    }
    insertrecursive(root,node){
        if(root.value < node.value){
            if(root.right === null){
                root.right = node
            }
            else{
                root.right = this.insertrecursive(root.right,node)
            }
        }
        else{
            if(root.left === null){
                root.left = node
            }
            else{
                root.left = this.insertrecursive(root.left,node)
            }
        }
    }
    checkbst(root,min,max){ 
    
        if(!root){
            return true
        }
        console.log(root.value,max)
        if(root.value<=min || root.value>=max){
            
            return false
        }
        else{
            return this.checkbst(root.left,min,root.value)  && this.checkbst(root.right,root.value,max)
        }
       

    }
}

const b1 = new bt
b1.insertone(100)
b1.insertone(150)
b1.insertone(1)
let l1 = {value:2,right:{value:3,right:null,left:null},left:{value:1,right:null,left:null}}
 console.log(b1.checkbst(l1,-Infinity,Infinity))
console.log(b1)