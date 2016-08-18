'use strict'
// A stack can be used to ensure that an arithmetic expression has balanced parentheses.
// Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing.
// An example of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 *.24.

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

function balancePar(expr){
  let s = new Stack()
  for(let i of expr.split('')){
    s.push(i)
  }
  return s.data  
}

console.log(
  balancePar('(1+2)*3')
)
