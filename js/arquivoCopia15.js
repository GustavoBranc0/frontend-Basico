console.log(new Date);
//arrays

let objetos = [
  'mouse',
  'mouse',
  'tesoura',
  'caneta',
  'notebook',
  'mouse',
  'mouse',
];

console.log(objetos);

let segundoItem = objetos[1];

// let indexMouse = objetos.findIndex(function (objeto) {
//   return objeto == 'mouse';
// });

// let indexMouse = objetos.indexOf('mouse'); // retorna a primeira ocorrencia
// let indexMouse = objetos.indexOf('mouse', 1); // retorna a segunda ocorrencia
// let indexMouse = objetos.lastIndexOf('mouse'); // retorna a ultima ocorrencia
let indexMouse = objetos.lastIndexOf('mouse', -2);// -2 retorna a penultima ocorrencia

let valor = objetos[indexMouse] ?? null;
console.log(indexMouse, valor);
