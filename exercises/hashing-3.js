// Write a program using hashing that reads a text file and compiles a list of the words in the file with the number of times each word appears in the file.
'use strict'

const HashTable = require('../notes/hash-linear-probing.js')

let table = new HashTable(307), words = readFromFile('hashing-3.txt').filter(a=> a != "")

debugger

for(let el of words){
  if(table.get(el) == false){
    table.put(el,1)
  } else {
    let temp = Number.parseInt(table.get(el)) + 1
    table.mod(el,temp)
  }
}

debugger

function readFromFile(file) {
  let words = require('fs').readFileSync('/home/user/Projects/mcmillan/exercises/'+file,{encoding:'utf-8'})
  .toLowerCase().replace(/\(|\)|‘|’|,|\.|-|–/g,'').replace(/\n|\ \ /g,' ').split(' ').map(a => a.trim())
  return words
}
