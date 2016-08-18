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
  let pFlag = false, nFlag = 0
  let s = new Stack()
  for( let i of expr.split('') ){
    if( i === "(" ){ pFlag = true }
    else if( pFlag && !Number.isNaN(Number.parseInt(i)) ){ nFlag++ }
    else if( nFlag > 1 ) { i == ")" ? null : s.push(')');pFlag = false;nFlag = 0}
    s.push(i)
  }
  return s.data.join('')
}

console.log(
  balancePar('(1+2*3*(4*5+3)')
)

// TODO: Maybe check overall parentheses count & position to fix the problem of far reaching parentheses?
