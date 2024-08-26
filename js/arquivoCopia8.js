console.log(new Date);


/*
de 0 a 1, brincar com chocalho

entre 1 e 3, brincar com triciclo

entre 3 e 6, brincar de carrinho

de 6 a 12 soltar pipa

de 12 a 15, jogar video game

de 15 a 20, jogar bola

maior que 20 dirigir

maior que 60, jogar dama
*/
function atividadeMasculina(idade) {
    if (isNaN(idade-0)) {
        return 'valor invalido';
    }
    if (idade <= 1 ){
        return 'brincar com chocalho'
    } else if (idade > 1 && idade <= 3) {
        return 'brincar com triciclo'
    } else if (idade > 3 && idade <= 6) {
        return 'brincar de carrinho';
    } else if (idade > 6 && idade <= 12) {
        return 'soltar pipa';
    } else if (idade > 12 && idade <= 15) {
        return 'jogar video game'
    } else if (idade > 15 && idade <= 20) {
        return 'jogar bola';
    } else if (idade > 20 && idade <=60) {
        return 'dirigir';
    }

    return 'jogar dama';
}

function atividadeMasculina2(idade) {
    if (isNaN(idade-0)) {
        return 'valor invalido';
    }

    if (idade <= 1 ) {
        return 'brincar com chocalho'
    }

    if (idade > 1 && idade <= 3) {
        return 'brincar com triciclo'
    }

    if (idade > 3 && idade <= 6) {
        return 'brincar de carrinho';
    }

    if (idade > 6 && idade <= 12) {
        return 'soltar pipa';
    }

    if (idade > 12 && idade <= 15) {
        return 'jogar video game'
    }

    if (idade > 15 && idade <= 20) {
        return 'jogar bola';
    }

    if (idade > 20 && idade <=60) {
        return 'dirigir';
    }

    return 'jogar dama';
}

function xyz(idade) {
    let menorIdade = idade < 18;
    if (menorIdade) {
        return 'é menor de idade!!!!!'
    }

    return `é de maior !!!`;
}

const EOL = `\n`;

console.log(
    '0 ' + atividadeMasculina2(0) +EOL,
    '1 ' + atividadeMasculina2(1) +EOL,
    '2 ' + atividadeMasculina2(2) +EOL,
    '3 ' + atividadeMasculina2(3) +EOL,
    '5 ' + atividadeMasculina2(5) +EOL,
    '20 ' + atividadeMasculina2(20) +EOL,
    '60 ' + atividadeMasculina2(60) +EOL,
    '16 ' + atividadeMasculina2(16) +EOL,
    '61 ' + atividadeMasculina2(61) +EOL,
    '7 ' + atividadeMasculina2(7) +EOL,
    '13 ' + atividadeMasculina2(13) +EOL,
    'L ' + atividadeMasculina2('L') +EOL,
    // parseInt('0123.99999999999999'),
    // parseInt('A123'-0),
    // parseInt('123A'-0),
    // parseFloat('0123.86'-0),
    // parseFloat('A123'-0),
    // parseFloat('123A'-0),
);


// console.log(
// xyz(12),EOL,
// xyz(10),EOL,
// xyz(19),EOL,
// xyz(20),EOL,
// xyz(18),EOL,
// );
