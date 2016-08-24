// Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.

const Deque = require('./queues-1.js')

function palindromTest(word){
  word = word.split('')
  dq = new Deque()
  for(let i=0;i<word.length;i++){
    dq.enqueueFront(word[i])
  }
  let tFlag = true
  function test(){
    if(dq.data.length < 2){return tFlag}
    if(dq.dequeueFront() != dq.dequeueBack()){tFlag = false}
    return test()
  }
  return test()
}

console.log(palindromTest('rac0ecar'))
