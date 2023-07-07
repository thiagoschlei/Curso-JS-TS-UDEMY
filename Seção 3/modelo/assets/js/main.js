function enviar() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    let imc = (peso / (altura * altura));

    if (imc <= 18.5) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você está no peso ideal.";
    } else if (imc >= 24.9 && imc <= 29.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem sobrepeso.";
    } else if (imc >= 29.9 && imc <= 34.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem obesidade grau 1.";
    } else if (imc >= 34.9 && imc <= 39.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem obesidade grau 2.";
    } else {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem obesidade grau 3."
    }
}   