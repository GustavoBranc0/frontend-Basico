console.log(new Date);
//strings
//concatenação

let nome = 'Gustavo';
let sobrenome = 'Rodrigo';

let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

nomeCompleto = `${nome} ${sobrenome}`; // Template String

console.log(nomeCompleto);

nomeCompleto = nome.concat(' ', sobrenome);

console.log(nomeCompleto);

nomeCompleto = [nome, sobrenome].join(' ');

console.log(nomeCompleto);

console.log(''.concat('Olá mundo', ' ', 'Gustavo'));
