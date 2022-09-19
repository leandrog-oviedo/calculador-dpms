//Declaro las variables principales a usar en el código.
let supCubiertaNumero;
let supSemiCubiertaNumero;
let supTotal;
const coefSemi = 0.5;
let click = document.getElementById("obtener");
let supCubierta = document.getElementById("sCubierta");
let supSemiCubierta = document.getElementById("sSemiCubierta");
let sGradoElec = document.getElementById("sTotal");
let sTotal = document.getElementById("sTotal");
let gradoElectrificacionAMostrar = document.getElementById("gradoElectrificacion")
let mostrarCantidadCircuitos = document.getElementById("cantCircuitos");
let gradoElec;
let gradoElecComparar;


//Obtengo datos desde el DOM
obtener.onclick = () => {
    supCubiertaNumero = Number(supCubierta.value);
    supSemiCubiertaNumero = Number(supSemiCubierta.value);
    supTotal = (supCubiertaNumero + (supSemiCubiertaNumero * coefSemi));
    actualizarSuperficieTotal();
    gradoElectrificacion();
    cantidadDeCircuitosAUsar();
};
//Declaro la funcion para actualizar la superficie total en el DOM
function actualizarSuperficieTotal() {
    sTotal.innerText = supTotal;

}
// Declaro la función para conocer el grado de electrificacion de la vivienda
function gradoElectrificacion() {
    sGradoElec = supTotal
    if (sGradoElec <= 60) {
        gradoElec = 'minimo'
    } else if (sGradoElec > 60 && sGradoElec <= 130) {
        gradoElec = 'medio'
    } else if (sGradoElec > 130 && sGradoElec <= 200) {
        gradoElec = 'elevado'
    } else if (sGradoElec > 200) {
        gradoElec = 'superior'
    }
    gradoElectrificacionAMostrar.innerText = gradoElec;
    
}

function cantidadDeCircuitosAUsar() {
    switch (gradoElec) {
        case gradoElec = 'minimo':
            mostrarCantidadCircuitos.innerText = ('Se deben usar al menos dos circuitos: ' + '\n' + '1- IUG' + '\n' + '1- TUG')
            break;
        case gradoElec = 'medio':

            mostrarCantidadCircuitos.innerText = ('Se deben usar al menos tres circuitos: ' + '\n' + '1- IUG' + '\n' + '1- TUG' + '\n' + '1- Libre elección')
            break;
        case gradoElec = 'elevado':

            mostrarCantidadCircuitos.innerText = ('Se deben usar al menos cinco circuitos: ' + '\n' + '2- IUG' + '\n' + '2- TUG' + '\n' + '1- TUE')
            break;
        case gradoElec = 'superior':
            mostrarCantidadCircuitos.innerText = ('Se deben usar al menos seis circuitos: ' + '\n' + '2- IUG' + '\n' + '2- TUG' + '\n' + '1- TUE' + '\n' + '1- Libre elección')
            break;

        default:
            mostrarCantidadCircuitos.innerText = ('ojo estamos en el caso default')
            break;
    }
}

/* let entrada = prompt("Ingrese un ambiente de la vivienda, para finalizar ingrese ESC");
const ambientes = [];
while (entrada != 'ESC') {
    ambientes.push(entrada);
    entrada = prompt("Ingrese otro ambiente de la vivienda, para finalizar ingrese ESC");
}
for (let i = 0; i < ambientes.length; i++) {
    alert("Ambiente "+ i + ' ' + ambientes[i]);
} 
 */