// Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

let List = require('../list')

List.prototype.insertLarge = function insertIfLarger(element){
  switch (typeof(element)){
    case "string":
      if(this.dataStore.filter(a=>a>element) == 0){this.add(element)}
      break;
    case "number":
      if(Math.max.apply(null,this.dataStore.filter(a=>typeof(a)=='number'))<element){this.add(element)}
      break;
    default:
      throw new Error('wrong datatype');
      break;
  }
}

var names = new List();
names.add('Barbara','Cynthia','Sylvester','Slice');
names.print();
names.insertLarge('Adolf');
names.insertLarge('Xenophon');
names.print();

let numbers = new List();
numbers.add(12,10,9,7,'t');
numbers.print();
numbers.insertLarge(1000);
numbers.print();
