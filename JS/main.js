const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatisticas = document.querySelectorAll ('[data-estatistica]')
let controle = document.querySelectorAll('[data-controle]')

controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados (evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas (evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

function manipulaDados (operacao, controle) {
    let peca = controle.querySelector ('[data-contador]')
    if (operacao ==='-'){
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas (peca, operacao) {
    console.log(pecas[peca])

    estatisticas.forEach((elemento)=> {
        if (operacao === '-'){
            elemento.textContent = parseInt (elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt (elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}