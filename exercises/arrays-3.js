//Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.

function TempStore() {
  this.dataStore = [];
  this.add = (...temps)=>this.dataStore.push(temps);
  this.avgWeek = averageWeek;
  this.avgAllWeeks = averageAllWeeks;
  this.avgMonth = averageMonth;
  this.print = ()=>console.log(this.dataStore);

  function averageWeek(weekNum) {
    return this.dataStore[weekNum].reduce((a,b)=>a+b)/this.dataStore[weekNum].length;
  }
  function averageAllWeeks(){
    return this.dataStore.map((_,i)=>this.avgWeek(i));
  }
  function averageMonth(){
    return this.dataStore.map((a)=>a.reduce((b,c)=>b+c)/a.length).reduce((d,e)=>d+e)/this.dataStore.length;
  }
}

let awa = new TempStore();
awa.add(1,3,4,5);
awa.add(6,7,8,9);
awa.add(4,5,7,8,9,10,2,4,5);
console.log(awa.avgAllWeeks());
console.log(awa.avgMonth());
