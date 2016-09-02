'use strict'
// A postfix expression evaluator works on arithmetic expressions taking the following form: 
// op1 op2 operator 
// Using two stacks — one for the operands and one for the operators — design and implement a JavaScript function that converts infix expressions to postfix expressions, and then use the stacks to evaluate the expression.

let Stack = require('../list')

function postFix(expr){
  let op = new Stack(),num = new Stack(),outp = 0;
  for(let i of expr.split(' ')){
    !Number.isNaN(Number.parseInt(i)) ? num.push(i) : ['+','-','*','/'].indexOf(i) > -1 ? op.push(i) : null
  }
  for(let i of op.data.reverse()){
    if(num.top() < 2){outp = eval(num.pop() + i + outp)}
    else{outp += eval(num.pop() + i + num.pop())}
    console.log(outp)
  }
  return outp
}

console.log(postFix('2 + 3 - 10'))
