// Repeat exercise 1 using separate chaining.

const HashTable = require('../notes/hash-separate-chaining')
const fs = require('fs')

let dict = new HashTable(137,31)

function readFromFile(file,table) {
  let words = fs.readFileSync('/home/user/Projects/mcmillan/exercises/'+file,{encoding:'utf-8'})
  .split('\n').map(a=>a.split('|')).map(a=>a.map(b=>b.trim()))
  words[words.length-1] == '' ? words.splice(-1,1) : null
  for(el of words){table.put(el[0],el[1])}
  return true
}

function getFromDict(word,table) {
  return table.get(word)
}

readFromFile('hashing-1.txt',dict)
getFromDict('House',dict)

debugger
