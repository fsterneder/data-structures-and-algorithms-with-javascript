// Use linear probing to create a simple dictionary to store the definitions of words.
// Your program should have two parts.
// The first part reads a text file that contains a list of words and definitions and stores them in a hash table.
// The second part of the program allows a user to enter a word and see the definition of that word.

const HashTable = require('../notes/hash-linear-probing')
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
