const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function diaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diasSemana[diaSemana]
}

function mesTexto(mes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[mes]
}

res.innerHTML = `${diaSemanaTexto(diaSemana)}, ${zeroEsquerda((diaMes))} de ${mesTexto(mes)} de ${ano} ${zeroEsquerda((hora))}:${zeroEsquerda((minuto))}`