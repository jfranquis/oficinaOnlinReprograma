var spanValorPorHora = document.querySelector("#resposta");
var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");

function calcular() {
    var valorDeHora = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2)
    spanValorPorHora.textContent = "R$ " + valorDeHora;

}
