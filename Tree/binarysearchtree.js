class Node{                                    // here in left side lesser value in right side greater value
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
    search(value){
        
        if(this.root === null){
            return 'not found'
        }
        else{
           return  this.searchrecursive(this.root,value)
        }
    }
    searchrecursive(root,value){
        
        if(!root){
            return 'not found'
        }
       else if(root.value === value){
            return 'found'
        }
        else if(root.value < value){
           return this.searchrecursive(root.right,value)
        }
        else {
           return this.searchrecursive(root.left,value)
        }
    }
    preorder(root){    // node left right
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){    // left node right
        if(root){
          this.inorder(root.left)
          console.log(root.value)
          this.inorder(root.right)
        }
    }
    postorder(root){    // left right node
       if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value)
       }
    }
    bfs(){
        let que = []
        let sum = 0
        que.push(this.root)
        while(que.length){
            let current = que.shift()
            // sum = current.value+sum
            if(current.left){
                que.push(current.left)
            }
            if(current.right){
                que.push(current.right)
            }
            console.log(current.value)
        }
       // console.log(sum)
       
    }
}
const b1 = new binarytree
b1.insertone(10)
b1.insertone(5)
b1.insertone(3)
b1.insertone(7)
b1.insertone(18)
//let r = b1.search(12)
//b1.preorder(b1.root)
//b1.inorder(b1.root)
b1.bfs()



//console.log(b1)