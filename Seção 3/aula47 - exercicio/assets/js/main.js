function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function iniciaRelogio(){
    const timer = setInterval(function(){

    },1000)
}

iniciar.addEventListener('click', function () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
    relogio.innerHTML = `${data.toLocaleTimeString('pt-BR')}`
})

pausar.addEventListener('click', function mostraHora() {
    relogio.innerHTML = 'oi'
});

zerar.addEventListener('click', function mostraHora() {
    relogio.innerHTML = '00:00:00'
});
