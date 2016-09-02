'use strict'
// Using the Dictionary class, write a program that stores the number of occurrences of words in a text.
// Your program should display each word in a text just once as well as the number of times the word occurs in the text.

const Dictionary = require('../dictionary')

function wordCount(text){
  let storage = new Dictionary()
  for(let word of text.toLowerCase().split(' ')){
    if(!storage.find(word)){storage.add(word,1)}
    else {storage.data[word] += 1}
  }
  return storage.showAll()
}

function wordCountSortByOccurance(text){
  let storage = new Dictionary()
  for(let word of text.toLowerCase().split(' ')){
    if(!storage.find(word)){storage.add(word,1)}
    else {storage.data[word] += 1}
  }
  // sort of a hack lol
  let sorted = () => {
    let vault = []
    for(let occ of Object.keys(storage.data)){
      vault.push(occ + ' ' + storage.data[occ])
    }
    return vault
    .sort((a,b) => Number.parseInt(a.split(' ')[1]) < Number.parseInt(b.split(' ')[1]))
    .join('\n')
    .replace(/ /g,':')
  }
  return sorted()
}

//wordCount('hello my name is hello hello HeLlo')
console.log(
wordCountSortByOccurance('the brown fox jumped over the blue fox the brown brown brown')
)
