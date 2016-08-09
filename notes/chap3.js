function List() {
  this.dataStore = [];
  this.append = append;
  this.remove = remove;
  this.length = ()=>this.dataStore.length;
  this.print = () => console.log(this.dataStore);

  function append(element) {
    this.dataStore[this.dataStore.length] = element;
  }
  function remove(element){
    if(this.dataStore.indexOf(element) > -1){
      this.dataStore.splice(this.dataStore.indexOf(element));
    } else {
      console.log('ERROR: no matching entry in list');
    }
  }
}

var names = new List();

names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.print();
