// return
// Retorna um valor
// Termina a função

/*
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2))
*/

/*
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Thiago','Schlei')
*/

/*
function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadriplica(n){
    return n * 4;
}

console.log(duplica(2), triplica(3), quadriplica(4))
*/

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2), triplica(3), quadriplica(4))