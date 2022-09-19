let supCubiertaNumero;
let supSemiCubiertaNumero;

let click = document.getElementById("obtener");
let supCubierta = document.getElementById("sCubierta");
let supSemiCubierta = document.getElementById("sSemiCubierta");

obtener.onclick = () => {
    const coefSemi = 0.5;
    supCubiertaNumero = Number(supCubierta.value);
    supSemiCubiertaNumero = Number(supSemiCubierta.value);
    let supTotal = (supCubiertaNumero + (supSemiCubiertaNumero * coefSemi));
    console.log(supTotal);
    let sTotal = document.getElementById("sTotal");
    sTotal.innerText = supTotal;
    gelct();
};

function gelct() {
    let sgradoelec = document.getElementById("sTotal")
    sgradoelec = Number(sgradoelec.innerHTML)
    let gradoElec = '';

    if (sgradoelec <= 60) {
        //alert('Grado de electrificación mínimo (hasta 60m2)')
        gradoElec = 'minimo'
    } else if (sgradoelec > 60 && sgradoelec <= 130) {
        //alert('Grado de electrificación medio (hasta 130m2)')
        gradoElec = 'medio'
    } else if (sgradoelec > 130 && sgradoelec <= 200) {
        //alert('Grado de electrificación elevado (hasta 200m2)')
        gradoElec = 'elevado'
    } else if (sgradoelec > 200) {
        //alert('Grado de electrificación superior (más de 200m2)')
        gradoElec = 'superior'
    }
    console.log(gradoElec);
    let escri = document.getElementById("cantCircuitos")

    switch (gradoElec) {
        case gradoElec = 'minimo':
            escri.innerText = ('Se deben usar al menos dos circuitos: ' + '\n' + '1- IUG' + '\n' + '1- TUG')
            break;
        case gradoElec = 'medio':

            escri.innerText = ('Se deben usar al menos tres circuitos: ' + '\n' + '1- IUG' + '\n' + '1- TUG' + '\n' + '1- Libre elección')
            break;
        case gradoElec = 'elevado':

            escri.innerText = ('Se deben usar al menos cinco circuitos: ' + '\n' + '2- IUG' + '\n' + '2- TUG' + '\n' + '1- TUE')
            break;
        case gradoElec = 'superior':
            escri.innerText = ('Se deben usar al menos seis circuitos: ' + '\n' + '2- IUG' + '\n' + '2- TUG' + '\n' + '1- TUE' + '\n' + '1- Libre elección')
            break;

        default:
            alert('ojo estamos en el caso default')
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