// First
// Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list. 

// Second
// Implement the back(n) function so that when executed, the current node is moved n spaces backward in the list.

// Third
// Implement the show() function, which displays the data associated with the current node.
// Write a program that uses a singly linked list to keep track of a set of test grades


let LinkedList = require('../linked-lists')

LinkedList.prototype.show = function(){
  return this.currentNode
}

LinkedList.prototype.advance = function(n){
  let ctx = this
  function advanceN(n){
    if(n < 1){return true}
    else {
      ctx.currentNode = ctx.currentNode.next
      return advanceN(n-1)
    }
  }
  return advanceN(n)
}

LinkedList.prototype.back = function(n){
  let ctx = this
  function backN(n){
    if(n < 1) {return true}
    else {
      ctx.currentNode = ctx.findBefore(ctx.currentNode.element)
      return backN(n-1)
    }
  }
  return backN(n)
}

// test purpose
let a = new LinkedList
a.insert('first')
a.insert('second')
a.insert('third')

a.advance(3)
a.back(2)
console.log(a.show())

debugger
