class graph{
    constructor(){
        this.adjascentlist = {}
    }
    addvertex(vertex){
        if(!this.adjascentlist[vertex]){
            this.adjascentlist[vertex] = new Set()
        }
    }
    addedge(vertex1,veryex2){
        if(!this.adjascentlist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjascentlist[veryex2]){
            this.addvertex(veryex2)
        }
        this.adjascentlist[vertex1].add(veryex2)
        this.adjascentlist[veryex2].add(vertex1)
    }
    get(vertex1){
        if(this.adjascentlist[vertex1]){
            return this.adjascentlist[vertex1]
        }
        else{
            return false
        }
    }
    removeedge(vertex1,vertex2){
        this.adjascentlist[vertex1].delete(vertex2)
        this.adjascentlist[vertex2].delete(vertex1)
    }
    removevertex(vertex){
        console.log(vertex)
        if(!this.adjascentlist[vertex]){
            console.log('recahcqjwdvhbkjwdv')
            return false
        }
        for(const item of this.adjascentlist[vertex]){
            console.log('jjj')
            console.log(item)
            this.removeedge(vertex,item)
        }
        delete this.adjascentlist[vertex]
    }
   
    display(){
        for(const item of this.adjascentlist){
           console.log( item + '-->' + [...this.adjascentlist[item]])
           // console.log(item)
        }
    }
  
}
const g1 = new graph
g1.addvertex(10)
g1.addvertex(20)
g1.addedge(20,10)
g1.addedge(40,20)
//g1.display()

//g1.removeedge('aswin','rahul')
//g1.removevertex('aswin')
console.log(g1)