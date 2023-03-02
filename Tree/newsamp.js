class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class bt{
    constructor(){
        this.root = null
    }
    insertone(value){
        const newnode = new node(value)
        if(this.root === null){
             this.root = newnode
        }
        else{
            this.insertrecursive(this.root,newnode)
        }

    }
    insertrecursive(root,newnode){
        if(root.value<newnode.value){
            if(root.right === null){
                root.right = newnode
            }
            else{
                this.insertrecursive(root.right,newnode)
            }
        }
        else{
            if(root.left === null){
                root.left = newnode
            }
            else{
                this.insertrecursive(root.left,newnode)
            }
        }
    }
    checkbst(root,min,max){
        if(!root){
            return true
        }
        if(root.value<min || root.value>max){
            return false
        }
        return this.checkbst(root.left,min,root.value) && this.checkbst(root.right,root.value,max)
        
    }
}
const b1 = new bt
b1.insertone(10)
b1.insertone(20)
b1.insertone(5)
b1.insertone(15)
const l1 = {value:100,left:{value:101,left:null,right:null},right:{value:2,left:null,right:null}}
console.log(b1.checkbst(b1.root,-Infinity,Infinity))
//console.log(b1)