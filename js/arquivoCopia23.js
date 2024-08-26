console.log(new Date);
//strings
//replace, replaceAll, search

let texto = "Eu gosto de maçã. Maçã é minha fruta favorita.";
// let novoTexto = texto.replace("maçã", "laranja");
// let novoTexto = texto.replace(/(M|m)açã/g, "laranja");
// let novoTexto = texto.replace(/(M|m)açã/, "laranja");
// let novoTexto = texto.replace(/Maçã/i, "laranja");
let novoTexto = texto.replace(/Maçã/ig, "laranja");

console.log(novoTexto); // "Eu gosto de laranja. Maçã é minha fruta favorita."


// let texto = "Eu gosto de maçã. Maçã é minha fruta favorita.";
// // let novoTexto = texto.replaceAll(/(M|m)açã/g, "laranja");
// let novoTexto = texto;

// let replacers = [
//     [/Maçã/g, 'Laranja'],
//     [/maçã/g, 'laranja'],
// ];

// replacers.forEach((item) => {
//     console.log(item);
//     novoTexto = novoTexto.replaceAll(item[0], item[1]);
// });

// console.log(novoTexto); // "Eu gosto de laranja. Laranja é minha fruta favorita."


// let texto = `
// Eu gosto de maçã. Maçã é minha fruta Favorita.`;
// let indice = texto.search("maçã");
// indice = texto.search(/(fa)/i);
// // indice = indice != -1 ? indice : null;
// indice = indice > -1 ? indice : null;
// console.log(indice); // 12
