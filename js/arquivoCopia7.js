console.log(new Date);

/**
 *
 * Switch - Testar um valor para várias opções (Conjunto fixo de valores)
 *
 *  - Deixa o código mais organizado e mais fácil de ler quando se está lidando com muitos casos diferentes para uma variavel
 *
 * If Else - Comparar vários valores (Quando a lógiva envolve multiplas variáveis). tambem é recomendado usar quando envolve operadores lógicos <, >, <=, etc.
 *
 *  - Indicado para usar quando possui uma logica mais complexa
 */



/**
 *
 * Exemplo de caso onde else if faz mais sentido
 *
 */
let media = 7;

if (media <=4) {
    console.log('esta de recuperação');
} else if (media > 4 && media <= 6) {
    console.log('esta de exame');
} else if (media >= 7){
    console.log('passou de ano');
}

/**
 *
 * Exemplo de caso onde switch faz mais sentido
 *
 */
let filme = 1;

switch(filme) {
    case 1:
        console.log('Deadpool & Wolverine'); break;

    case 2:
        console.log('Titanic'); break;

    case 3:
        console.log('Poderoso chefão'); break;

    default:
        console.log('Esse filme não existe ou não está em exibição'); break;


}
