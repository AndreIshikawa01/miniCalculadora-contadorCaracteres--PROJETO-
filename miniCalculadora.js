
document.getElementById("somar").onclick = function(){
const n1 = parseInt(document.getElementById("n1").value)
const n2 = parseInt(document.getElementById("n2").value)
const resultado = document.getElementById("resultado")
  resultado.innerHTML = "Resultado: " + (n1 + n2)
}

document.getElementById("subtrair").onclick = function(){
const n1 = parseInt(document.getElementById("n1").value)
const n2 = parseInt(document.getElementById("n2").value)
const resultado = document.getElementById("resultado")
  resultado.innerHTML = "Resultado: " + (n1 - n2)
}

document.getElementById("dividir").onclick = function(){
const n1 = parseInt(document.getElementById("n1").value)
const n2 = parseInt(document.getElementById("n2").value)
const resultado = document.getElementById("resultado")
  resultado.innerHTML = "Resultado: " + (n1 / n2)
}

document.getElementById("multiplicar").onclick = function(){
const n1 = parseInt(document.getElementById("n1").value)
const n2 = parseInt(document.getElementById("n2").value)
const resultado = document.getElementById("resultado")
  resultado.innerHTML = "Resultado: " + (n1 * n2)
}
  
  
// Contador de Caracteres
  
let inputTexto = document.getElementById("input");
let contador = document.getElementById("contador");

inputTexto.addEventListener("input", contarLetras);

function contarLetras() {
  contador.innerHTML = "Total de Caracteres:" + (inputTexto.value.length);
}


