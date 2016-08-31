// Write a program that uses a singly linked list to keep track of a set of test grades entered interactively into the program.

const LinkedList = require('../linked-lists')

let list = new LinkedList()

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("a) Add test grade\nb) View test grades")
rl.on('line',(inp) => {
  switch(inp){
    case "a":{
      rl.once('line',(ainp) => {
        list.insert(ainp)
      })
    }
    case "b":{
      console.log(list.display())
    }
  }
})
