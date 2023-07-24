const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Schlei',
    idade: 25,
    endereco: {
        rua: 'São Paulo',
        numero: 667,
        bairro: 'Itoupava'
    }
};

//Atribuição via desestruturação
const { nome: teste, sobrenome } = pessoa
console.log(teste, sobrenome)