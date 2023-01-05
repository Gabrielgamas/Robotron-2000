import pecas from "./estatisticas.js";

const estatisticas = document.querySelectorAll("[data-estatistica]");
let controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(
      evento.target.dataset.peca,
      evento.target.dataset.controle
    );
  });
});

function manipulaDados(operacao, controle) {
  let peca = controle.querySelector("[data-contador]");
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca, operacao) {
  console.log(pecas[peca]);

  estatisticas.forEach((elemento) => {
    if (operacao === "-") {
      elemento.textContent =
        parseInt(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica];
    } else {
      elemento.textContent =
        parseInt(elemento.textContent) +
        pecas[peca][elemento.dataset.estatistica];
    }
  });
}
