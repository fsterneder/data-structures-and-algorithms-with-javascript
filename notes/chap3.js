function List() {
  this.dataStore = [];
  this.append = (element) => this.dataStore[this.dataStore.length] = element;
  this.remove = (element) => this.dataStore.splice(this.find(element),1);
  this.length = () => this.dataStore.length;
  this.find = (element) => this.dataStore.indexOf(element) > -1 ? this.dataStore.indexOf(element) : (function(){throw Error('yes');})();
  this.print = () => console.log(this.dataStore);

  function insert(element,after){    
  }
}

var names = new List();

names.append("Cynthia");
names.append("Ray");
names.append("Barbara");
names.append('Slice');
names.print();
names.remove('Ray');
names.print();
//names.remove('Raymano');
names.print();
