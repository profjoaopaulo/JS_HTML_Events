//Acesso aos elementos HTML
const botao1 = document.getElementById("b1");
const botao2 = document.getElementById("b2");
const input1 = document.getElementById("in1");
const paragrafo1 = document.getElementById("p1");
const paragrafo2 = document.getElementById("p2");

botao1.addEventListener('click', () => {

    botao1.innerText = "Clicou :D!!!";
    paragrafo2.innerText = "";
    botao1.style.background = "blue";
})

botao2.addEventListener('mouseover', () => {

    botao2.innerText = "Opa! ;)";
})

botao2.addEventListener('mouseout', () => {

    botao2.innerText = "Volta aqui! ;(";
    botao1.innerText = "Depois clica de novo... :)";
})

input1.addEventListener("input", () => {

    paragrafo1.innerText = input1.value;
})

document.body.addEventListener("keydown", () => {

    paragrafo2.innerText += String.fromCharCode(event.keyCode);
})