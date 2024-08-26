console.log(new Date);

let comida = 'peixe';

switch(comida) {
    case 'salada':
        console.log('Vegano');
        break;
    case 'peixe':
        // console.log('peixe');
    case 'carne':
        console.log('Carnivoro');
        break;
    case 'ovos':
        console.log('Vegetariano');
        break;
    default:
        console.log('Opção invalida');
}

let dia = 7;

switch (dia) {
    case 1:
    case 7:
        console.log('fim de semana');
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('dia de trabalho');
        break;

    default:
        console.log('dia invalido');

        break;
}


let diaSemana = (diaS) => {
    diaS = diaS-0;

    switch (diaS) {
        case 1:
        case 7:
          return ('fim de semana');

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return ('dia de trabalho');

        default:
            return ('dia invalido');
    }
};

console.log(1, diaSemana('1'));
console.log(2, diaSemana('2'));
console.log(3, diaSemana('3'));
console.log(4, diaSemana('4'));
console.log(5, diaSemana('5'));
console.log(6, diaSemana('6'));
console.log(7, diaSemana('7'));
console.log(8, diaSemana('8'));
console.log(9, diaSemana('9'));
console.log(10, diaSemana('10'));
console.log(11, diaSemana('11'));
console.log(12, diaSemana('12'));


diaSemana = (diaS) => {
    diaS = diaS-0;

    if ([1,7].includes(diaS)) {
          return ('fim de semana');
    } else if ([2,3,4,5,6].includes(diaS)) {
        return ('dia de trabalho');
    } else {
        return 'dia invalido';
    }
};
console.log('-'.repeat(10));
console.log(1, diaSemana('1'));
console.log(2, diaSemana('2'));
console.log(3, diaSemana('3'));
console.log(4, diaSemana('4'));
console.log(5, diaSemana('5'));
console.log(6, diaSemana('6'));
console.log(7, diaSemana('7'));
console.log(8, diaSemana('8'));
console.log(9, diaSemana('9'));
console.log(10, diaSemana('10'));
console.log(11, diaSemana('11'));
console.log(12, diaSemana('12'));


diaSemana = (diaS) => {
    diaS = diaS-0;

    if ([1,7].includes(diaS)) {
          return ('fim de semana');
    }

    if ([2,3,4,5,6].includes(diaS)) {
        return ('dia de trabalho');
    }

    return 'dia invalido';
};
console.log('-'.repeat(10));
console.log(1, diaSemana('1'));
console.log(2, diaSemana('2'));
console.log(3, diaSemana('3'));
console.log(4, diaSemana('4'));
console.log(5, diaSemana('5'));
console.log(6, diaSemana('6'));
console.log(7, diaSemana('7'));
console.log(8, diaSemana('8'));
console.log(9, diaSemana('9'));
console.log(10, diaSemana('10'));
console.log(11, diaSemana('11'));
console.log(12, diaSemana('12'));
