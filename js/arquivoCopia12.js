console.log(new Date);

class Veiculo {
  velocidade;
  cor;
  marca;
  multa;

  constructor(cor, marca) {
    this.cor = cor;
    this.marca = marca;
    this.multa = 0;
    this.velocidade = 0;
    console.log('Construtor no pai');
  }

  adicionaMulta(valor) {
    this.multa += valor;
  }

  removeMulta(valor) {
    this.multa -= valor;
  }
}

class Moto extends Veiculo {
  tipoMoto;

  constructor(cor, marca, tipoMoto) {
    super(cor, marca);
    this.tipoMoto = tipoMoto;
  }

  darGrau() {
    return `A moto ${this.marca} deu grau`;
  }
}

class Carro extends Veiculo {
  tipoCarro;

  constructor(cor, marca, tipoCarro) {
    super(cor, marca);
    this.tipoCarro = tipoCarro;
  }

  darCavaloDePau() {
    return `O carro ${this.marca} deu cavalo de pau`;
  }
}

let meuCarro = new Carro('amarelo', 'volkswagem', 'popular');
console.log(meuCarro);

meuCarro.adicionaMulta(250);

console.log(meuCarro, meuCarro.darCavaloDePau());

meuCarro.removeMulta(100);

let minhaMoto = new Moto('preta', 'honda', 'esportiva');

console.log(meuCarro, minhaMoto, minhaMoto.darGrau());
