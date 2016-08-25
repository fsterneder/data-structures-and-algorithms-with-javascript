// Modify the ED example (Example 5-5) so the user can control the activity in the ED.
// Create a menu system that allows the user to choose from the following activities:
// a. Patient enters ED.
// b. Patient is seen by doctor.
// c. Display list of patients waiting to be seen. 

const PriorityQ = require('../queues').PriorityQ
const Patient = require('../queues').Patient

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

debugger

let pq = new PriorityQ

console.log('ED ACTIVITY PROGRAM\na) Patient enters ED.\nb) Patient is seen by doctor.\nc) Display list of patients waiting to be seen.\ne) Exit.')

let seen = []
rl.on( 'line', (line) => {
  switch(line){
    // queue event
    case "a": {
      console.log('Enter name and code')
      console.log(rl._prompt)
      rl.once('line',(li) =>{
        let lsplit = li.split(' ')
        if(Number.isNaN(lsplit[1])){'wrong entry'}
        else{pq.enqueue(new Patient(lsplit[0],lsplit[1]))}
        console.log(pq.data[pq.data.length -1])
      })
      break
    }
    // dequeue event
    case "b":{
      seen.push(pq.dequeue())
      console.log(seen[seen.length-1])
      break
    }
    // waiting list event
    case "c":{
      for(pat of seen){console.log(pat)}
      break
    }
    // quit event
    case "e": process.exit(0);break
  }
})
