//for in lê os índices ou chaves do objeto
/*const frutas = ['banana', 'maçã', 'uva', 'laranja']

for (let indice in frutas) {
    console.log(frutas[indice])
}*/

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Schlei',
    idade: 25
}

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}