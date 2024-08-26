console.log(new Date);
//strings

let nome = '           Gustavo        ';
console.log(nome.length);

console.log('|%s|', nome);

console.log('|%s|', nome.trim());
console.log('|%s|', nome.trimStart());
console.log('|%s|', nome.trimEnd());

console.log('|%s|', nome.trim().length);
console.log('|%s|', nome.trimStart().length);
console.log('|%s|', nome.trimEnd().length);

nome = nome.trim();
console.log(nome);

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

console.log('slice', nome.slice(0, 1));
console.log('substring', nome.substring(0, 1));

console.log('');

console.log('slice', nome.slice(3, 1));
console.log('substring', nome.substring(3, 1));

console.log('');

console.log('slice', nome.slice(1, -2));
console.log('substring', nome.substring(1, -2));

console.log('');

console.log('slice', nome.slice(0));
console.log('substring', nome.substring(0));
