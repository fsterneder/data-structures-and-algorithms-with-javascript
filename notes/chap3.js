function List() {
   this.listSize = 0;
   this.dataStore = [];
   this.append = append;
}

function append(element) {
   this.dataStore[this.listSize++] = element;
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
