console.log(new Date);
//strings
//matchAll

let nomeCompleto = 'de Gustavo Rodrigo De de DE Oliveira de';

let resultado = nomeCompleto.matchAll('Rodrigo');

resultado = nomeCompleto.matchAll(/([de]){1}/g); // Vai procurar pelas ocorrencias de 'd' ou 'e'
resultado = nomeCompleto.matchAll(/(de){1}/g);  // Vai procurar pelas ocorrencias de 'de'
resultado = nomeCompleto.matchAll(/(de|DE){1}/g); // Vai procurar pelas ocorrencias de 'de' ou 'DE'
resultado = nomeCompleto.matchAll(/(de){1}/gi); // Vai procurar pelas ocorrencias de 'de' ignorando se é maiuscula ou minuscula
resultado = nomeCompleto.matchAll(/^(de){1}/gi); // Vai procurar pelas ocorrencias de 'de' ignorando se é maiuscula ou minuscula que esteja no inicio da string
resultado = nomeCompleto.matchAll(/(de){1}$/gi); // Vai procurar pelas ocorrencias de 'de' ignorando se é maiuscula ou minuscula que esteja no final da string

// console.log(resultado);

let valor = resultado.next();

while(!valor.done) {
  console.log(valor, valor.done);
  valor = resultado.next();
}

let pattern = /(^de|de$)/;

// console.log(pattern.test('ola mundo de'));
