//Acesso aos elementos HTML
const botao1 = document.getElementById("b1");
const botao2 = document.getElementById("b2");
const input1 = document.getElementById("in1");
const paragrafo1 = document.getElementById("p1");
const paragrafo2 = document.getElementById("p2");

//Adicionando o evento de click ao botao1
//Perceba o uso de função anônima no segundo argumento da função addEventListener()
botao1.addEventListener('click', () => {

    botao1.innerText = "Clicou :D!!!";
    paragrafo2.innerText = "";
    botao1.style.color = "yellow"; //Mudando a cor do texto do botão usando a propriedade style.color
    botao1.style.background = "blue"; //Mudando a cor de fundo do botão usando a propriedade style.background
})

//Adicionando o evento mouseover (quando a seta do mouse passa em cima do elemento HTML)
botao2.addEventListener('mouseover', () => {

    botao2.innerText = "Opa! ;)";
    botao2.style.borderColor = "black"; //mudando a cor da borda do botao2 através de style.borderColor
})

//Adicionando o evento mouseout (quando a seta do mouse deixa o elemento HTML)
botao2.addEventListener('mouseout', () => {

    botao2.innerText = "Volta aqui! ;(";
    botao1.innerText = "Depois clica de novo... :)";
    botao2.style.borderColor = "red"; //mudando a cor da borda do botao2 através de style.borderColor
})

//Adicionando o evento input (quando um texto é digitado dentro de um elemento HTML, tal como um campo de texto)
input1.addEventListener("input", () => {

    paragrafo1.innerText = input1.value;
})

//Adicionando o evento keydown (quando qualquer tecla é pressionada no teclado)
document.body.addEventListener("keydown", () => {

    paragrafo2.innerText += String.fromCharCode(event.keyCode);
})