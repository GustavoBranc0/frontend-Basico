console.log(new Date);

const pessoa = {
    nome: 'gustavo',
    sobrenome: 'branco',
    getNome() {
        return this.nome;
    },
    getNomeCompleto() {
        // return `${this.nome} ${this.sobrenome}`;
        // return this.nome + ' ' + this.sobrenome;
        return [this.nome, this.sobrenome].join(' ');
    },
    get nomeCompleto() {
        return this.getNomeCompleto();
    },
    iniciais: function() {
        return [this.nome.slice(0, 1), this.sobrenome.slice(0, 1)].join(' ');
    }
};

console.log('olá', pessoa.nome);

pessoa.nome = 'pedro';
// pessoa.nomeCompleto = pessoa.getNomeCompleto();


console.log('olá', pessoa.getNome());
console.log('olá', pessoa.getNomeCompleto());

pessoa.nome = 'joao';
console.log('olá %s!', pessoa.nomeCompleto);

// let nome = undefined;
// nome = 'pedro';
// nome = 45;
// console.log(nome);

console.log(pessoa.iniciais())
