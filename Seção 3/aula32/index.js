let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras;


console.log(a, b, c)

/* uma maneira de fazer
const numeros = [2, 8, 7, 9, 6, 1]
const primeiro = numeros[0]

console.log(primeiro)*/

// maneira mais eficaz
const num = [2, 8, 7, 9, 6, 1]
//                 a vírgula com espaço vazia nomeia a variável do local
//                                 ... pegam todas as variáveis que não foram declaradas anteriormente
const [primeiroNum, , terceiroNum, ...resto] = num

console.log(primeiroNum, terceiroNum)
console.log(resto)

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(numeros[1][0])
