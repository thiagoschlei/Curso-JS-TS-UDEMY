//               0       1        2                   
const alunos = ['Thiago', 'Maria', 'Joao']
alunos[0] = 'Eduardo' // substitui elemento
alunos[3] = 'Luiza' // adiciona na posição escolhida
alunos.push('Thiago') // adiciona na última posição
alunos.unshift('Cletiane') // adiciona na primeira posição
alunos.pop() // exclui a última posição
alunos.shift() // exclui a primeira posição
delete alunos[1] // deleta a posição(1), mas ainda ocupa espaço na memória

console.log(alunos)