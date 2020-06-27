function clicou(){
    alert("Boa, feroz!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirect(){
    window.open("https://www.google.com.br/") //redireciona para outra aba
    //window.location.href = "https://www.google.com.br/" redireciona na mesma aba
}

function trocar(){
    document.getElementById("here").innerHTML = "Obrigado por passar o mouse!";
    document.getElementById("here").id = "back";
}
//Função responsiva que muda a cor (css) e o texto da tag, porém so quando o mouse está em cima do texto
function voltar(){
    document.getElementById("back").innerHTML = "Passe o mouse aqui!";
    document.getElementById("back").id = "here";
}

function trocarNew(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //document.getElementById("here").innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("here").id = "back";
}

function voltarNew(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
    //document.getElementById("back").innerHTML = "Passe o mouse aqui!";
    //document.getElementById("back").id = "here";
}

//As 2 funções de baixo, além de serem mais elegantes e simples, possuem a facilidade de nao confundir o compilador, em caso de trocar o texto de uma tag q n deve ser trocada

function change(elemento) {
    console.log(elemento.value)
}