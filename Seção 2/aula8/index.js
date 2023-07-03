const nome = 'Thiago';
const sobrenome = 'Schlei Menegazzi';
const idade = 25;
const peso = 85;
const altura = 1.95;
let imc;
let anoNasc;

imc = peso / (altura*altura)
anoNasc = 2023 - idade

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kgs')

console.log('Tem',altura,'de altura e seu IMC é de',imc.toFixed(2))

console.log(nome,'nasceu em',anoNasc)