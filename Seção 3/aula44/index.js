function soma(x,y){
    if (typeof x !== "number" || typeof y !== "number"){
        throw('x e y precisam ser numeros');
    }

    return x + y;
}

try{
console.log(soma(1,2));
console.log(soma('oi',2));
} catch(error){
    console.log(error);
}