//Escreva uma função que recebe 2 números e retorne o maior entre eles

/*
const num1 = 9;
const num2 = 8;
let maior = num1;

if (num1 > num2) {
    maior = num1
} else if (num2 > num1) {
    maior = num2
}

console.log(maior)
*/

/*
function max(x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
}
*/

//arrow function
const max = (x,y) => x > y ? x : y;

console.log(max(2, 3))