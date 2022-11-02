"use strict";
// Div com as 10 cores selecionadas aleatorimente
var coresSelecionadas = document.querySelector('#coresSelecioandas');
// Btn 'Confirmar' para disparar o evento
var btnConfirmar = document.querySelector('#btnConfirmar');
// Campo com o nome da cor que o usuário escolher
var nomeDaCor = document.querySelector('#nomeDaCor');
// Array com todas as cores disponíveis
var arrCores = [
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
    'blueviolet', 'brown', 'burlyWood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
    'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
    'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
    'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
    'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred',
    'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
    'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
    'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
    'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
    'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
    'paleturquoise', 'plaevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
    'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
    'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
    'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
];

var arrCoresAleatorias = [];
var corSelecionada = '';

function selecionaCores(){
    arrCoresAleatorias = [];
    // Array das dez cores Aleatorias
    // Percorre todo o array de cores
    for (var i = 10; i != 0; i--) {
        // Adiciona 10 cores aleatoriamente no array
        arrCoresAleatorias.push(arrCores[Math.floor(Math.random() * arrCores.length)]);
        // Se o array estiver cheio, o ciclo encerra
    }
    
    corSelecionada = arrCoresAleatorias[Math.floor(Math.random() * arrCoresAleatorias.length)];
    coresSelecionadas.innerHTML = `<p>[${arrCoresAleatorias}]</p>`;
}

selecionaCores();

btnConfirmar.addEventListener('click', () => {
    if (nomeDaCor.value == corSelecionada) {
        alert('Parabéns');
        selecionaCores();
    }
    else {

        var diferenca = Math.abs(nomeDaCor.value.length - corSelecionada.length);

        var menorOuMaior = nomeDaCor.value.length < corSelecionada.length
        ? "Mais"
        : "Menos"
        

        Toastify({
            text: `Você errou!
             a cor correta tem ${diferenca} caractéres a ${menorOuMaior} de diferença
             tente novamente!`,
            duration: 5000,
            position: "center",
            className: "error",
            style: {
              background: "red",
            }
          }).showToast();
          console.log(diferenca);

        arrCoresAleatorias.splice(arrCoresAleatorias.indexOf(nomeDaCor.value), 1)
        coresSelecionadas.innerHTML = `<p>[${arrCoresAleatorias}]</p>`;
    }

    document.body.style.backgroundColor = nomeDaCor.value;
    nomeDaCor.value = "";
});

console.log(corSelecionada)
console.log(arrCoresAleatorias.length)