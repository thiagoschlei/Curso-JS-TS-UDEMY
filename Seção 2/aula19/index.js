// Primitivos (imutáveis) - string, number, boolean, undefined, null
/*let a = 'A'
let b = a

a = 'B'
console.log(a, b)*/ // variável b fez a CÓPIA da variável a

//Referência (mutáveis) - array, object, function
let a = [1, 2, 3]
let b = a

a.push(4)

console.log(a, b) // variável b usou a variável a como REFERÊNCIA na memória