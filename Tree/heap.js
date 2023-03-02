/*
parrent : i/2,
left child : 2*i,
right child : 2*i +1
*/
// heap is a complete binary tree

class heap {
    constructor() {
        this.heap = [null]
    }

    insertminheap(num) {   // min heap insert ----> parrent will be less than child
        this.heap.push(num)
        console.log(this.heap.length)
        if (this.heap.length > 2) {
            console.log('reached')
            let idx = this.heap.length - 1
            while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {     // swap the parent and child
                    let temp = this.heap[idx]
                    this.heap[idx] = this.heap[Math.floor(idx / 2)]
                    this.heap[Math.floor(idx / 2)] = temp
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2)
                    }
                    else {
                        break;
                    }
                }
            }
        }
        
    }
    deletemin(){
        let smallest = this.heap[1]
        
       if(this.heap.length > 2){
        this.heap[1] = this.heap[this.heap.length-1]
        this.heap.splice(this.heap.length-1)
        if(this.heap.length === 3){
            
            if(this.heap[1]>this.heap[2]){
                let temp = this.heap[2]
                this.heap[2] = this.heap[1]
                this.heap[1] = temp
                
            }
        
            return smallest
        }
        let idx = 1
        let left = 2*idx
        let right = 2*idx + 1
        while(this.heap[idx]>=this.heap[left]||this.heap[idx]>=this.heap[right]){
            if(this.heap[idx]>this.heap[left]){
                let temp = this.heap[left]
                this.heap[left] = this.heap[idx]
                this.heap[idx] = temp
                idx = 2*idx
            }
            if(this.heap[idx]>=this.heap[right]){
                let temp = this.heap[right]
                this.heap[right] = this.heap[idx]
                this.heap[idx] = temp
                idx = 2*idx + 1
            }
             left = 2*idx
             right = 2*idx+1
             if(this.heap[left] === undefined || this.heap[right] === undefined){
                break;
             }
        

        }
        return smallest
       }
       if(this.heap.length === 2){
        console.log(this.heap)
        
         this.heap.splice(1,1)
        
        
       }

       
       return smallest
    }
    sort(){
        let sorted = []
        while(this.heap.length>1){
            sorted.push(this.deletemin())
        }
        return sorted
    }
}

const h1 = new heap
h1.insertminheap(10)
h1.insertminheap(20)
h1.insertminheap(5)
h1.insertminheap(25)
h1.insertminheap(0)

console.log(h1.sort())


