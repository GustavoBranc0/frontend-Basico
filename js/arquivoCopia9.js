console.log(new Date);

/**
 * tornar público: this.
 *
 * Encapsular: let _nomeDaVariavel
 *
 * obs: quando for encapsular, o nome da variável deve possuir um _ antes
 */

const abc = {
    ab:123,
    cd: null,
    ef: () => {
        console.log('ef', this);
    },
    gh: function () {
        console.log('gh', this);
    },
    xy() {
        console.log('xy', this);
    },

};

Object.freeze(abc);
abc.cd = 444;
let xy = {};
Object.assign(xy, abc);
xy.cd = 444;
// abc = xy;//funciona se for uma variavel, nao funciona se for uma constante
console.log('aaa', xy);

abc.ef();
abc.gh();
abc.xy();
console.log(abc.xy);

abc.xy =  function () {
    console.log('xy+', this);
};
console.log(abc.xy);

abc.xy();
abc.xy = null;
console.log(abc.xy);
abc.xy();

xy.xy =  function () {
    console.log('xy.xy+', this);
};
xy.xy();

Object.freeze(xy.xy);
xy.xy =  function () {
    console.log('xy.xy++', this);
};
xy.xy();
