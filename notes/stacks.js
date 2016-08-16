// Stacks

class Stack {
  constructor(){
    this.data = []
    this.top = () => this.data.length
    this.push = (...element) => {for(var i of element){this.data.push(i)}}
    this.pop = () => this.data.pop()
    this.peek = () => this.data[this.data.length-1]
    this.clear = () => this.data = []
  }
}

let names = new Stack()

debugger
