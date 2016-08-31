// Rewrite your solution to Example 6-4 using a doubly linked list.

const DoublyLL = require('../notes/doubly-linked-lists')

let list = new DoublyLL()

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("a) Add test grade\nb) View test grades")
rl.on('line',(inp) => {
  switch(inp){
    case "a":{
      console.log('Enter grade')
      rl.once('line',(ainp) => {
        list.insert(ainp)
      })
    }
    case "b":{
      console.log(list.display())
    }
  }
})
