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

let mouses = objetos.filter(function (objeto) {
  return objeto == 'mouse';
});

console.log(mouses);

objetos.push('mouse gamer');

mouses = objetos.filter(function (objeto) {
  return objeto.startsWith('mouse');
});

console.log(mouses);

objetos.push('mini mouse gamer');

mouses = objetos.filter(function (objeto) {
  return objeto.includes('mouse');
});

console.log(mouses);
