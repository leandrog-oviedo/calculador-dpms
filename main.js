let supCubierta = Number(prompt('Ingrese la cantidad de metros cuadrados cubiertos'));
let supSemicubierta = Number(prompt('Ingrese la cantidad de metros cuadrados semicubiertos'));
 const coefSemi = 2;
let supTotal = '';


function calcSup() {
    supTotal = supCubierta + (supSemicubierta / coefSemi);
    console.log(supTotal);
}
calcSup();
alert(supTotal);

let gradoElec = '';

if (supTotal <= 60) {
    //alert('Grado de electrificación mínimo (hasta 60m2)')
    gradoElec = 'minimo'
} else if (supTotal > 60 && supTotal <= 130) {
    //alert('Grado de electrificación medio (hasta 130m2)')
    gradoElec = 'medio'
} else if (supTotal > 130 && supTotal <= 200) {
    //alert('Grado de electrificación elevado (hasta 200m2)')
    gradoElec = 'elevado'
} else if (supTotal > 200) {
    //alert('Grado de electrificación superior (más de 200m2)')
    gradoElec = 'superior'
}
//console.log(gradoElec);

switch (gradoElec) {
    case gradoElec = 'minimo':
        alert('Se deben usar al menos dos circuitos: ' + '\n' + '1- IUG' + '\n' + '1- TUG')
        break;
    case gradoElec = 'medio':
        alert('Se deben usar al menos tres circuitos: ' + '\n' + '1- IUG' + '\n' + '1- TUG' + '\n' + '1- Libre elección')
        break;
    case gradoElec = 'elevado':
        alert('Se deben usar al menos cinco circuitos: ' + '\n' + '2- IUG' + '\n' + '2- TUG' + '\n' + '1- TUE')
        break;
    case gradoElec = 'superior':
        alert('Se deben usar al menos seis circuitos: ' + '\n' + '2- IUG' + '\n' + '2- TUG' + '\n' + '1- TUE' + '\n' + '1- Libre elección')
        break;

    default:
        alert('ojo estamos en el caso default')
        break;
}

let entrada = prompt("Ingrese un ambiente de la vivienda, para finalizar ingrese ESC");
const ambientes = [];
while (entrada != 'ESC') {
    ambientes.push(entrada);
    entrada = prompt("Ingrese otro ambiente de la vivienda, para finalizar ingrese ESC");
}
for (let i = 0; i < ambientes.length; i++) {
    alert("Ambiente "+ i + ' ' + ambientes[i]);
} 

