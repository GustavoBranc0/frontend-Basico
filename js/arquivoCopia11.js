console.log(new Date);

//contrutores

function ContaBancaria(saldoInicial) {
  let saldo = saldoInicial;

  this.depositar = function(valor) {
    if (valor > 0) {
      saldo += valor;
    }
  };

  this.verSaldo = function() {
    return saldo;
  };
}

let minhaConta = new ContaBancaria(100);
minhaConta.depositar(50);
console.log(minhaConta.verSaldo()); // 150

//closures

function criarContador() {
  let contador = 0;

  return {
    incrementar: function() {
      contador++;
    },
    mostrar: function() {
      console.log(contador);
    }
};
}

let contador = criarContador();
contador.incrementar();
contador.mostrar(); // 1

//classes
class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  _metodoPrivado() {
    console.log('Método privado');
  }

  mostrarNome() {
    console.log(this._nome);
    this._metodoPrivado();
  }
}

let pessoa = new Pessoa('Ana');
pessoa.mostrarNome(); // Ana
// pessoa._metodoPrivado(); // Não deve ser chamado diretamente
