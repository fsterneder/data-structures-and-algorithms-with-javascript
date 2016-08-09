// 2. Store a set of words in an array and display the contents both forward and backward.

const words = ['taco','cat',' ','stack','cats',' ','star','rats'];

function forward(array){
  return array.reduce((a,b)=>a+b);
}
function backward(array){
  return array.reduceRight((a,b)=>a+b);
}

console.log(forward(words));
console.log(backward(words));
