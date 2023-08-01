//Escreva uma função que retorna 2 argumentos, largura e altura.
//Retorne true se a imagem estiver no modo paisagem

/*
function ePaisagem(larg, alt) {
    let paisagem = true
    if (larg > alt) {
        return true
    } else {
        return false
    }
}*/

/*
function ePaisagem(larg, alt) {
    return larg > alt ? true : false;
}
*/

//arrow function
const ePaisagem = (larg, alt) => larg > alt;

console.log(ePaisagem(1920, 1080))