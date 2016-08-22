class Queue {
  constructor(){
    this.data = []
    this.length = () => this.data.length
    this.enqueue = (element) => this.data.push(element)
    this.dequeue = () => this.data.shift()
    this.front = () => this.data[0]
    this.back = () => this.data[this.data.length-1]
    this.toString = () => this.data.join('\n')
    this.empty = () => this.data = []
  }
}

module.exports = Queue
