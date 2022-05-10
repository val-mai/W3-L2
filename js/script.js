
alert('Benvenuto su Conta i tuoi gatti');
var gatti = window.prompt("Quanti gatti ci sono? ");
var dimensioneFila = window.prompt("Quanti gatti per ogni fila? ");

var numeroFile = Math.floor(gatti / dimensioneFila);
var restoGatti = gatti % dimensioneFila;

document.getElementById('gatti').innerHTML = gatti;
document.getElementById('dim').innerHTML = dimensioneFila;

let gattiMancanti = dimensioneFila - restoGatti;

if (restoGatti == 0) {
    document.getElementById('file').innerHTML =
        '<i class="fa-solid fa-chart-simple"></i> Hai esattamente ' + numeroFile + ' file di gatti!';
}
else if (gattiMancanti != 1) {
    document.getElementById('resto').innerHTML =
        '<i class="fa-solid fa-chart-simple"></i> Hai ' + numeroFile + ' file di gatti! <br><i class="fa-solid fa-cat"></i>  Aggiungi altri ' + gattiMancanti +
        " mici per completare un'altra fila.";
}
else {
    document.getElementById('resto').innerHTML =
        '<i class="fa-solid fa-chart-simple"></i> Hai ' + numeroFile + ' file di gatti! <br><i class="fa-solid fa-cat"></i>  Aggiungi un altro micio per completare ancora una fila.';
}

const zampe = 4;

let zampeTot = zampe * gatti;
document.getElementById('zampe').innerHTML = 'Abbiamo contato ben ' + zampeTot +
    ' zampe tra le tue fila';
