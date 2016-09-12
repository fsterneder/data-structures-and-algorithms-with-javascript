'use strict'
// Add the function higher(element) to the Set class.
// This function returns the least element in the set strictly greater than the given element.

const Set = require('../set')

Set.prototype.higher = function(element){
  // ? the smallest which is still greater than the given element? IDK but I go with that
  element = element.split('').map(a => a.charCodeAt(0)).reduce((b,c) => b + c)
  // produces an multi-dimension array of the charCodes of each entry
  let gm = this.data.map(b => b.split('').map(c => c.charCodeAt(0)))
  // inserts the sum of the charCodes for each entry at the start of each array
  for(let el of gm){el.unshift(el.reduce((a,b) => a + b))}
  // picks the smallest entry which is still greater than the given element
  let win = Math.min(...gm.filter(a => a[0] > element).map(b => b[0])), outp
  // reverts the charCode back to an outputable String
  for(let el of gm){
    if(el[0] == win){
      el.shift()
      outp = el.map(a => String.fromCharCode(a)).join('')
    }
  }
  return outp
}
