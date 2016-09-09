// Modify the Set class so that the class stores its elements in sorted order.
// Write a program to test your implementation.

const Set = require('../set')

Set.prototype.add = function(element) {
  this.data.push(element)
  this.data = this.data.sort((a,b) => a > b)
  return this.data.length
}

debugger
