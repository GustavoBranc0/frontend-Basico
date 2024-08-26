console.log(new Date);
/**
 * SELECT nome FROM usuarios
 *
 * SELECT nome FROM usuarios WHERE id = 2
 */

// function selectQuery(columns, table, where = null) {
//     return `SELECT ${columns} FROM ${table}` + (where ? ` where ${where}` : '');
// }

// console.log(selectQuery('id,nome', 'usuarios', 'id = 2'))

const DB = () => {
    return {
        type: 'SELECT',
        table: '',
        wheres: null,
        columns: ['*'],
        select(columns) {
            this.type = 'SELECT';
            this.columns = columns;
            return this;
        },

        setTable(table) {
            this.table = table;
            return this;
        },

        setWheres(wheres) {
            wheres = Array.isArray(wheres) ? wheres : (this.wheres || null);
            this.wheres = wheres;
            return this;
        },

        where(column, operator, value) {
            let wheres = this.getWhere(false);
            wheres.push(`${column} ${operator} ${value}`);

            return this.setWheres(wheres);
        },

        getWhere(toString = false) {
            let wheres = Array.isArray(this.wheres) ? this.wheres : [];

            if (!wheres.length) {
                return toString ? wheres.join(' ') : wheres;
            }

            return toString ? 'WHERE ' + wheres.join(' ') : wheres;
        } ,
        toSelectString() {
            return [
                'SELECT',
                this.columns,
                'FROM',
                this.table,
                this.getWhere(true),
            ].join(' ');
        }
    };
}

console.log(
    DB().setTable('usuarios').select('id, nome, email').where('id', '=', '5').toSelectString()
);

console.log(
    DB().setTable('usuarios').select('id, nome, email').toSelectString()
);

let validString = (value) => {
    if (typeof value != 'string') {
        throw 'valor precisa ser uma string valida';
    }

    return value;
};

// console.log(validString('   gfk'));

// console.log('gustavo'.slice(-2));


let limit = (text, limit = -1, after = '...') => {
    text = validString(text);
    limit = limit-0 || -1;

    if(limit < 0 || text.length <= limit) {
        return text;
    }

    return text.slice(0, limit) + `${after}`;
};

console.log(
    limit('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae repellendus quis ipsam iure, doloribus alias earum! Cumque, iusto atque.', 200, ' (saiba mais...)')
);
