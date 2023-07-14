function enviar() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    let imc = (peso / (altura * altura));

    if (!peso) {
        res.innerHTML = 'Peso inválido'
        return
    }
    else if (!altura) {
        res.innerHTML = 'Altura inválida'
        return
    }
    else if (imc <= 18.5) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você está abaixo do peso.";
    } else if (imc <= 24.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você está no peso ideal.";
    } else if (imc <= 29.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem sobrepeso.";
    } else if (imc <= 34.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem obesidade grau 1.";
    } else if (imc <= 39.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem obesidade grau 2.";
    } else if (imc > 39.9) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Você tem obesidade grau 3."
    } else {
        res.innerHTML = "IMC inválido, revise os dados e tente novamente!"
    }
}   