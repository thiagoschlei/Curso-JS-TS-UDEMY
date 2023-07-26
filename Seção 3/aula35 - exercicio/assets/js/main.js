const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]
res.innerHTML = ''
for (let i = 0; i <= elementos.length; i++) {
    let { tag, texto } = elementos[i]
    res.innerHTML += `<${tag}>${texto}</${tag}>`
}