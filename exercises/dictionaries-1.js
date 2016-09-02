// Write a program that takes a set of names and phone numbers from a text file and stores them in a Dictionary object.
// Include in your program the ability to display one phone number, display all phone numbers, add new phone numbers, remove phone numbers, and clear out the list of numbers.

const fs = require('fs')
const Dictionary = require('../dictionary')

let phoneBook = new Dictionary()

function insertDataFromFile(file,dictionary){
  let buffer = fs.readFileSync('/home/user/Projects/mcmillan/exercises/'+file,{encoding:'utf-8'})
  buffer = buffer.split('\n')
  for(entry of buffer){
    entry = entry.split(' ')
    entry[0] != '' ? dictionary.add(entry[0],entry[1]) : null
  }
}

insertDataFromFile('dictionaries-1.txt',phoneBook)

debugger
