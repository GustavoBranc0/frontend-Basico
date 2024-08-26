console.log(new Date);
//arrays

let pessoa = [
  'rodrigo',
  23,
  1.80,
  'masculino',
  false,
  ['1@nomes.com', '2@gmail.com',],
  {
    cidade: 'Taubaté'
  },
  null,
];

console.log(
  'esse é o %s, ele tem %s anos, tem %s de altura e é do sexo %s',
  pessoa[0],
  pessoa[2],
  pessoa[1],
  pessoa[3],
);

let nomes = [
  'roberto',
  'carlos',
  'gustavo',
];

// let nome = 'felipe';
// console.log(nome.toUpperCase());

nomes.forEach(
  function (nome) {
    console.log(nome.toUpperCase());
  }
);
nomes.push('rafael');

nomes = nomes.map(
  function (nome) {
    return nome.toUpperCase();
  }
);

nomes.push('claudio');

console.log(nomes);

let ultimoNome = nomes.pop();

console.log(nomes);

let primeiroNome = nomes.shift();

console.log(nomes);

nomes.unshift('daniel');

console.log(nomes);

console.log(primeiroNome, ultimoNome);
