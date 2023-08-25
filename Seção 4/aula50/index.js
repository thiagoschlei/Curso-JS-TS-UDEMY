/*
function funcao() {
    console.log(arguments[0]);
}
funcao('Thiago', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

/*
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7)
*/

/*
function funcao(a, b = 0) {
    console.log(a + b);
}
funcao(1, 2)
*/

/*
function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
const obj = { nome: 'Thiago', sobrenome: 'Schlei', idade: 25 };
funcao(obj)
*/

/*
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('-', 0, 20, 30, 40, 50)
*/