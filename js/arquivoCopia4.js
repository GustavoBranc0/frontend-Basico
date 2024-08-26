console.log(new Date);

/**
 *
 * == igual em valor
 * === igual em valor e tipo
 * != diferente em valor
 * !== diferente em valor e tipo
 */


// console.log(0 == false); //true

// console.log(0 === false); //false

// console.log(0 != false); //false

// console.log(0 !== false); //true

// if (0 || 1) {
//     console.log('verdadeiro 0 || 1');
// }

// if (0 && 1) {
//     console.log('verdadeiro 0 && 1');
// }

// if (0 || false || null || undefined || 1) {
//     console.log('verdadeiro 0 || false || null || undefined || 1');
// }

// if (0 && false && null && undefined && 1) {
//     console.log('verdadeiro 0 && false && null && undefined && 1');
// }

// if ((1 && 2) || false) {
//     console.log('verdadeiro (1 && 2) || false');
// }

// if ((0 || 2) && true) {
//     console.log('verdadeiro (0 || 2) && true');
// }

// const pseudoFalso = (valor) => {
//     return !valor;
// }

// console.log(pseudoFalso(false));
// console.log(pseudoFalso(0));
// console.log(pseudoFalso(undefined));
// console.log(pseudoFalso(null));
// console.log(pseudoFalso('0'));
// console.log(pseudoFalso(''));


// console.log(!(false || 0 || undefined || null || ''));  //nor


// console.log(!(1 && true && 'v' && ' 23' && ' '));  //nand


// const xor = (a, b) => (a && !b) || (!a && b);

// console.log(xor(true, true)); // false
// console.log(xor(false, false)); // false
// console.log(xor(true, false)); // true
// console.log(xor(false, true)); // true
