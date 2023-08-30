// Escopo Global
function retornaFuncao(){
    const nome = 'Thiago'
    return function(){
        return nome
    }
}

const funcao = retornaFuncao();
console.log(funcao)