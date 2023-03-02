class stackusingq {
    constructor() {
        this.q1 = []
        this.q2 = []
        this.temp = null

    }
    push(value) {
        this.q1.push(value)

    }
    pop() {

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift())
        }
        this.q1.shift()
        this.temp = this.q2
        this.q2 = this.q1
        this.q1 = this.temp
        this.temp = null
    }
    peek(){
        while(this.q1.length > 1){
            this.q2.push(this.q1.shift())
        }
        let top = this.q1.shift()
        this.q2.push(top)
        this.temp = this.q2
        this.q2 = this.q1
        this.q1 = this.temp
        this.temp = null
        return top

    }
}

const s1 = new stackusingq
s1.push(100)
s1.push(200)
s1.push(300)
s1.push(400)
s1.pop()
console.log(s1.peek())
console.log(s1)