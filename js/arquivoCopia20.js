console.log(new Date);
//strings
//match

let nomeCompleto = 'Gustavo Rodrigo De Oliveira de';

let resultado = nomeCompleto.match('Rodrigo');

// console.log(resultado, resultado.index, nomeCompleto.slice(resultado.index));

resultado = nomeCompleto.match(/([de]){1}/); // Vai procurar pela primeira ocorrencia de 'd' ou 'e'
resultado = nomeCompleto.match(/(de){1}/);  // Vai procurar pela primeira ocorrencia de 'de'
resultado = nomeCompleto.match(/(de|DE){1}/); // Vai procurar pela primeira ocorrencia de 'de' ou 'DE'
resultado = nomeCompleto.match(/(de){1}/i); // Vai procurar pela primeira ocorrencia de 'de' ignorando se é maiuscula ou minuscula


console.log(resultado);
