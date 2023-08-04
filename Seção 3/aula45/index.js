/*
try {
    // Executa essa parte do código quando não há erros
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch (e) {
    // É executada quando há erros
    console.log('Tratando o erro')
} finally {
    // Sempre é executado
    console.log('FINALLY: é sempre executado')
}
*/
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

}

const hora = retornaHora();
console.log(hora)