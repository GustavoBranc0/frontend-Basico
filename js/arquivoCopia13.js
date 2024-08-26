console.log(new Date);
//null safe
let pessoa = {
  nome: 'carlos',
  cpf: '22222222',
  idade: '33',
  endereco: {
    rua: 'rua fulano',
  },
  cnh: null,
};

console.log(pessoa.nome, pessoa.cpf, pessoa.idade, pessoa?.peso, pessoa.endereco.rua, pessoa.endereco.numero);
console.log(pessoa?.cnh?.categoria, pessoa.abc?.xyz?.e?.r?.y);
