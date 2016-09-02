// Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.  

let List = require('../list')

List.prototype.insertSmall = function insertIfSmaller(element){
  switch (typeof(element)){
    case "string":
      if(this.dataStore.filter(a=>a<element) == 0){this.add(element)}
      break
    case "number":
      if(Math.min.apply(null,this.dataStore.filter(a=>typeof(a)=='number'))>element){this.add(element)}
      break
    default:
      throw new Error('wrong datatype')
      break
  }
}

var names = new List()
names.add('Barbara','Cynthia','Sylvester','Slice')
names.print()
names.insertSmall('Adolf')
names.insertSmall('Xenophon')
names.print()

let numbers = new List()
numbers.add(12,10,9,7,'t')
numbers.print()

numbers.insertSmall(5)
numbers.insertSmall(1000)
numbers.print()
