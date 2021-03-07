'use strict';

//objeto demonstrando qual som cada tecla faz e criando-as :
const sons = {
    'A' : 'voice.mp3',
    'S' : 'bass.mp3',
    'D' : '3.mp3',
    'F' : '4.mp3',
    'G' : 'clap.mp3',
    'H' : 'hihat.mp3',
    
}

//criando divs iguais em javascript:
const criarDiv  = (texto) => {
    const div = document.createElement('div'); //cria o elemento div
    div.classList.add('key'); //aplica a classe key na div
    div.textContent = ''; //caixa em branco
    div.id = texto; //cria um id pra localização000
    document.getElementById("container").appendChild(div); // adiciona a div na classe container
}

//função para exibir o objeto sons:
const exibir  = (sons) => {
    Object.keys(sons).forEach(criarDiv); //retorna um array com as keys
}

//função para cada letra tocar um som :
const tocarSom = (letra) => {
    const audio = new Audio(`./effects/${sons[letra]}`); //procurando o som e colocando-o na letra:
    audio.play();
}

//usar as letras pelo teclado
const adicionarEfeito = (letra) => {
    document.getElementById(letra).classList.add('active');
}

//esperar o efeito acabar para remover o active :
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => {
        div.classList.remove('active');
    }
    div.addEventListener('transitionend' , removeActive) // quando o efeito de transição acabar, remover o efeito
}

//criar evento do click
const ativarDiv = (evento) => {
    let letra = '';
    //saber a letra que cliquei
    if(evento.type == 'click') {
        //capturar teclas e cliques
     letra = evento.target.id; // target = onde eu cliquei
    } 
    else {
         letra = evento.key.toUpperCase();
    }
    //impossibilitar erros ao clicar no container (fora das divs) :
    const letraPermitida = sons.hasOwnProperty(letra); //''tem a propriedade letra?'', se sim tocar o som - true or false
    if (letraPermitida) {
        adicionarEfeito (letra); //tecla e clique
        tocarSom(letra); //quando clicar,tocar som
        removerEfeito(letra); // tirar o efeito
    }
}


exibir(sons);

document.getElementById('container').addEventListener('click' , ativarDiv); //pede pra ouvir o click e usar a função ativarDiv

//capturar as teclas :
window.addEventListener('keydown',ativarDiv); //keydown = clicar na tecla
