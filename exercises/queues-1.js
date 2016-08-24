//  Modify the Queue class to create a Deque class.
// A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list.
// Test your class in a program.

class Deque {
  constructor(){
    this.data = []
    this.length = () => this.data.length
    this.enqueueBack = (element) => this.data.push(element)
    this.enqueueFront = (element) => this.data.unshift(element)
    this.dequeueFront = () => this.data.shift()
    this.dequeueBack = () => this.data.pop()
    this.front = () => this.data[0]
    this.back = () => this.data[this.data.length-1]
    this.toString = () => this.data.join('\n')
    this.empty = () => this.data = []
  }
}

module.exports = Deque
