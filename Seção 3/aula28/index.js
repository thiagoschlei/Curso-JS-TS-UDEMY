const data1 = new Date(1999, 5, 28, 11, 0, 25)
//                   ano,mês,dia,hora,min,seg
// mês começa com jan = 0 , fev = 1 ...
console.log(data1.toString())

const data2 = new Date('1998-01-01 11:35:00')
console.log(data2.toString())

console.log('Dia', + data2.getDate())
console.log('Mês', + data2.getMonth() + 1) // Mês começa do zero
console.log('Ano', + data2.getFullYear())
console.log('Hora', + data2.getHours())
console.log('Minuto', + data2.getMinutes())
console.log('Segundo', + data2.getSeconds())
console.log('Dia da semana', + data2.getDay()) // 0 - Domingo , 6 - Sábado