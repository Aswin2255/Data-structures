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
    insertrecursive(root,newnode){
        if(root.value < newnode.value){
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
    checknearvalue(root,value,currentdif,mindiff,mindiffnode){
          if(root === null){
            return  mindiffnode.value
          }
          else{
             currentdif =  Math.abs(root.value - value) 
             if(currentdif<mindiff){
                mindiff = currentdif
                mindiffnode = root
             }
             if(root.value<value){
              return  this.checknearvalue(root.right,value,currentdif,mindiff,mindiffnode)
             }
             else{
                return this.checknearvalue(root.left,value,currentdif,mindiff,mindiffnode)
             }
          }
    }
} 
const b1 = new bt
b1.insertone(100)
b1.insertone(200)
b1.insertone(1)
b1.insertone(20)
console.log(b1.checknearvalue(b1.root,10000,null,Infinity,null))
//console.log(b1)