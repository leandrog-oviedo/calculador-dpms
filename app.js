//Creo un array donde voy a guardar los distintos ambientes de la vivienda.
const rooms = [];
let roomName1;
let roomCSurface;
let roomScsurface;
let totalCoveredSurface;
let totalSemicoveredSurface;
let totalSurface;
let gradoElec;
let sGradoElec = document.getElementById("sTotal");
let gradoElectrificacionAMostrar = document.getElementById("gradoElectrificacion")
let mostrarCantidadCircuitos = document.getElementById("cantCircuitos");
const calculate = document.getElementById('calculate')


//Leo desde el html los datos a ingresar al array de ambientes y los pusheo.
const createRooms = () => {
    const roomName = document.getElementById('roomName');
    const roomCoveredSurface = document.getElementById('roomCoveredSurface');
    const roomSemicoveredSurface = document.getElementById('roomSemicoveredSurface');
    roomName1 = roomName.value;
    roomCSurface = parseFloat(roomCoveredSurface.value);
    roomScsurface = parseFloat(roomSemicoveredSurface.value);

    rooms.push({
        roomName1,
        roomCSurface,
        roomScsurface
    });

}

const getTotalSurface = () => {
    totalCoveredSurface = rooms.reduce((acc, item) => acc + item.roomCSurface, 0);
    totalSemicoveredSurface = rooms.reduce((acc, item) => acc + item.roomScsurface, 0);
    totalSurface = (totalCoveredSurface + (totalSemicoveredSurface * 0.5))
    sTotal.innerText = totalSurface;
}

const renderRooms = () => {
    const tableRooms = document.getElementById('roomsTable');
    let tableBody = document.createElement('tbody');

    rooms.forEach (room =>{
        tableBody.innerHTML = "";
        //console.log(roomName1,roomCSurface,roomScsurface);
        let row = document.createElement('tr');

        let td = document.createElement('td');
        td.innerText = room.roomName1;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = room.roomCSurface;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = room.roomScsurface;
        row.appendChild(td);

        tableBody.appendChild(row);
    })
    tableRooms.appendChild(tableBody);
};

// Declaro la función para conocer el grado de electrificacion de la vivienda
function gradoElectrificacion() {
    sGradoElec = totalSurface
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




roomsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createRooms();
    renderRooms();
    document.getElementById('roomsForm').reset();
});

calculate.onclick = () => {
    getTotalSurface();
    gradoElectrificacion();
    cantidadDeCircuitosAUsar();
}