console.log(new Date);


let idade = 0;

// if(idade){
//     console.log('tem mais de 1 ano');
// }

// console.log(Boolean(idade));


// console.log(idade ? 'tem mais de 1 ano' : 'tem menos de 1 ano');

let name = null;
let defaultName = null;

//console.log('ola %s', name ? name : 'convidado'); //operador ternario

//console.log('ola %s', name ?? defaultName ?? undefined ?? null ?? ' 456' ?? 123); //null coalesce

console.log('ola %s', name || defaultName || 0 || undefined || null || false || ' 456' || 123); //null coalesce
