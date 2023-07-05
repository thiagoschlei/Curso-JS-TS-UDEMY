/*const nome1 = 'Thiago';
const idade1 = 25;

const nome2 = 'Cletiane';
const idade2 = 24;
*/

/*const pessoa1 = {
    nome:'Thiago',
    idade:25,
}
console.log(pessoa1.nome)*/

function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Thiago', 'Schlei', 25)
const pessoa2 = criaPessoa('Cletiane', 'Lopes', 24)

console.log(pessoa1, pessoa2)