/* 
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar "true"
|| -> OR -> OU -> Apenas uma expressão precisa ser verdadeira para retornar "true"
! -> NOT -> NÃO -> Inverte a expressão
*/

const expAnd = true && true && true;
const expOr = true || false || false;
const expNot = !true // retorna false

console.log(expAnd)
console.log(expOr)
console.log(expNot)