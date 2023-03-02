class Node{
    constructor(value){
        this.value = value,
        this.right = null,
        this.left = null
    }
}
class binarytree{
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
                this.insertrecursive(root.right,node)
            }
        }
        else{
            if(root.left === null){
                root.left = node
            }
            else{
                this.insertrecursive(root.left,node)
            }
        }
    }
    min(root){
        
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    remove(value){
        this.root = this.del(this.root,value)
    }
    del(root,value){
        if(root === null){
            return null
        } if(root.value < value){
            root.right = this.del(root.right,value)
         }
         else if(root.value>value){
            root.left = this.del(root.left,value)
         }
         else{
            if(!root.left && !root.right){
                return null
            }
            else if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            else{
                root.value = this.min(root.right)
                root.right = this.del(root.right,root.value)
            }
         }
         return root
    }
}

const b1 = new binarytree
b1.insertone(100)
b1.insertone(18)
b1.insertone(20)
b1.insertone(200)
b1.insertone(150)

//console.log(b1.min(b1.root))
b1.remove(100)

console.log(b1)