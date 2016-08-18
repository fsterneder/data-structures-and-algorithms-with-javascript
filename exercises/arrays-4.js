//Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

function Letters(){
  this.store = [];
  this.add = (...letters)=>{for(i in letters){this.store.push(letters[i])}};
  this.print = ()=>console.log(this.store);
  this.makeWord = ()=> this.store.join('');
}

var words = new Letters();
words.add('a','b','c');
words.add('d','e','f');
console.log(words.makeWord());
