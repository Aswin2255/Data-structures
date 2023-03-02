class qusingstack{
    constructor(){
        this.input = []
        this.ouput = []
    }
    enque(value){
        this.input.push(value)
    }
    deque(){

        if(this.ouput.length === 0){
            while(this.input.length){
                this.ouput.push(this.input.pop())
          }
        }
        else{
           
            return this.ouput.pop()
        }
        return this.ouput.pop()
    }
    top(){
        if(this.ouput.length === 0){
            while(this.input.length){
                this.ouput.push(this.input.pop())
          }
        }
           return this.ouput[this.ouput.length-1]
        
    }
}
const q1 = new qusingstack

q1.enque(10)
q1.enque(100)
q1.enque(2000)
q1.deque()
console.log(q1.top())
console.log(q1)