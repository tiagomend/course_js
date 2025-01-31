console.log('Luiz Otávio' && 0 && 'Maria'); // out: 0
console.log('Luiz Otávio' && true && 'Maria'); // out: Maria
console.log('Luiz Otávio' && '' && 'Maria'); // out: ''
console.log('Luiz Otávio' && null && 'Maria'); // out: null
console.log('Luiz Otávio' && NaN && 'Maria'); // out: NaN
console.log('Luiz Otávio' && undefined && 'Maria'); // out: undefined


function sayHi(){
  return 'Hi!';
}

const willRun = true;

console.log(willRun && sayHi()); // out: Hi!

console.log(0 || false || null || 'Tiago' || true); // out: Tiago
const userColor = 'red';
const defaultColor = userColor || 'green';
console.log(defaultColor); // out: red
