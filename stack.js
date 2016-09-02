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

module.exports = Stack;

// Multiple Base Conversions
function multiBase(n,b){
  let s = new Stack()
  while(n > 0){
  s.push(n%b)
  n = Math.floor(n /= b)
  }
  return s.data.reverse().join('')
}

// Palindrome Check
function isPalindrome(word){
  let s = new Stack()
  for(let i of word){s.push(i)}
  let rev = '', leng = s.top()
  for(let i = 0;i < leng;i++){rev += s.pop()}
  return word == rev ? true : false
}
