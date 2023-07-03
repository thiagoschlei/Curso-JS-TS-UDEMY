               //0123456789
let umaString = 'O rato roeu a roupa do rei de roma'

console.log(umaString[4])
console.log(umaString.charAt(7))
console.log(umaString.indexOf('roupa'))
console.log(umaString.indexOf('roupa',8))
console.log(umaString.indexOf('o',3))
console.log(umaString.lastIndexOf('o',25))
console.log(umaString.length)
console.log(umaString.search(/t/))
console.log(umaString.replace('rato','cachorro'))
console.log(umaString.replace('r','#'))
console.log(umaString.replace(/r/g,'#'))
console.log(umaString.slice(2,6))
console.log(umaString.slice(-3))
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())