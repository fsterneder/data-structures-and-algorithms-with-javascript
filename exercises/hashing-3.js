// Write a program using hashing that reads a text file and compiles a list of the words in the file with the number of times each word appears in the file.
'use strict'

const HashTable = require('../notes/hash-linear-probing.js')

debugger

let table = new HashTable(), words = readFromFile('hashing-3.txt')

for(let el of words){
  console.log(table.get(el))
  if(!table.get(el)){
    table.put(el,0)
  } else {
    let temp = Number.parseInt(table.get(el))
    table.mod(el,temp += 1)
  }
}

console.log(table.show() + '\n alive')

function readFromFile(file) {
  let words = require('fs').readFileSync('/home/user/Projects/mcmillan/exercises/'+file,{encoding:'utf-8'})
  .toLowerCase().replace(/\(|\)|‘|’|,|\.|-|–/g,'').replace(/\n|\ \ /g,' ').split(' ').map(a => a.trim())
  return words
}
