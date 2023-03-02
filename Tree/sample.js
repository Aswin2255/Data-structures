class Node{
    constructor(value){
        this.value = value,
        this.right = null,
        this.left = null
    }
}
class bt{
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
    prenlr(root){  //node left right
        if(root){
            console.log(root.value)
            this.prenlr(root.left)
            this.prenlr(root.right)
        }
    }
    inlnr(root){   //left node right
       if(root){
        this.inlnr(root.left)
        console.log(root.value)
        this.inlnr(root.right)
       }
    }
    postlrn(root){  // left right node
        if(root){
            this.postlrn(root.left)
            this.postlrn(root.right)
            console.log(root.value)
        }
        
    }
    bfs(root){
        let que = []
        que.push(root)
        while(que.length){
            let current = que.shift()
            if(current.left){
                que.push(current.left)
            }
            if(current.right){
                que.push(current.right)
            }
            console.log(current.value)
        }
    }
    checknearvalue(root,value,mindiff,currentdiff,mindiffnode){
        if(root === null){
             return mindiffnode.value
        }
        else{
        currentdiff = Math.abs(root.value - value)
        if(currentdiff<mindiff){
            mindiff = currentdiff
            mindiffnode = root
        }
        if(root.value < value){
           return this.checknearvalue(root.right,value,mindiff,currentdiff,mindiffnode)
        }
        else{
           return this.checknearvalue(root.left,value,mindiff,currentdiff,mindiffnode)
        }
    }
}
checkbst(root,min,max){
    if(root === null){
        return true
    }
    if(root.value < min || root.value > max){
        return false
    }
    return this.checkbst(root.left,min,root.value) && this.checkbst(root.right,root.value,max)
}
remove(value){
 this.root = this.del(this.root,value)
}
del(root,value){
   if(root === null){
    return null
   }
   if(root.value < value){
        this.del(root.right,value)
   }
   else if(root.value > value){
    this.del(root.left,value)
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
       root.right =   this.del(root.right,root.value)

    }
   }
   return root
   
}
min(root){
    if(!root.left){
        return root.value
    }
    else{
        this.min(root.left)
    }
}
}
const b1 = new bt

b1.insertone(100)
b1.insertone(1)
b1.insertone(200)
//b1.prenlr(b1.root)
//b1.inlnr(b1.root)
//console.log(b1.postlrn(b1.root))
//console.log(b1)
//b1.postlrn(b1.root)
//b1.bfs(b1.root)
//console.log(b1.checknearvalue(b1.root,500,Infinity,null,null))
//console.log(b1.checkbst(b1.root,-Infinity,Infinity))
b1.remove(100)
console.log(b1)
