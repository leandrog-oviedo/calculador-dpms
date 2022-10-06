//Creo un array donde voy a guardar los distintos ambientes de la vivienda.
const rooms = JSON.parse(localStorage.getItem("room")) || [];
let roomId = 0;
let totalCoveredSurface;
let totalSemicoveredSurface;
let totalSurface;
let gradoElec;
const gradoElectrificacionAMostrar = document.getElementById("gradoElectrificacion");
const mostrarCantidadCircuitos = document.getElementById("cantCircuitos");
const calculate = document.getElementById("calculate");
const saveRoom = document.getElementById("saveRooms");
const recuperar = document.getElementById("getRooms");
let recuperarState = false;


//Leo desde el html los datos a ingresar al array de ambientes y los pusheo.
saveRoom.addEventListener("click", () => {
    roomId++;
    const roomName = document.getElementById("roomName").value;
    const roomCoveredSurface = parseFloat(document.getElementById("roomCoveredSurface").value);
    const roomSemicoveredSurface = parseFloat(document.getElementById("roomSemicoveredSurface").value);
    rooms.push({
        roomId,
        roomName,
        roomCoveredSurface,
        roomSemicoveredSurface,
    });
    localStorage.setItem("room", JSON.stringify(rooms));

    recuperarState = true;

    renderRooms();

    Toastify({

        text: `${roomName} agregado exitosamente`,

        duration: 1500,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        
        style: {
            background: "linear-gradient(to right, #669663, #29C920)",
            color:"#000000",
            radius:"20px"
        },


    }).showToast();


});

const getTotalSurface = () => {
    totalCoveredSurface = rooms.reduce((acc, item) => acc + item.roomCoveredSurface, 0);
    totalSemicoveredSurface = rooms.reduce((acc, item) => acc + item.roomSemicoveredSurface, 0);
    totalSurface = totalCoveredSurface + totalSemicoveredSurface * 0.5;
    sTotal.innerText = totalSurface;
};

const renderRooms = () => {
    const tableRooms = document.getElementById("roomsTable");
    let tableBody = document.createElement("tbody");

    rooms.forEach((room) => {
        if (recuperarState) {
            tableBody.innerHTML = "";
        }

        let row = document.createElement("tr");
        let td = document.createElement("td");

        td.innerText = room.roomName;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = room.roomCoveredSurface;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerText = room.roomSemicoveredSurface;
        row.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = `<button id="${room.roomId}" class="btn btn-danger">x</button>`;
        row.appendChild(td);

        tableBody.appendChild(row);
    });
    tableRooms.appendChild(tableBody);
};

// Declaro la función para conocer el grado de electrificacion de la vivienda
function gradoElectrificacion() {
    if (totalSurface <= 60) {
        gradoElec = "minimo";
    } else if (totalSurface > 60 && totalSurface <= 130) {
        gradoElec = "medio";
    } else if (totalSurface > 130 && totalSurface <= 200) {
        gradoElec = "elevado";
    } else if (totalSurface > 200) {
        gradoElec = "superior";
    }
    gradoElectrificacionAMostrar.innerText = gradoElec;
}

function cantidadDeCircuitosAUsar() {
    switch (gradoElec) {
        case (gradoElec = "minimo"):
            mostrarCantidadCircuitos.innerText = "Se deben usar al menos dos circuitos: " + "\n" + "1- IUG" + "\n" + "1- TUG";
            break;
        case (gradoElec = "medio"):
            mostrarCantidadCircuitos.innerText =
                "Se deben usar al menos tres circuitos: " + "\n" + "1- IUG" + "\n" + "1- TUG" + "\n" + "1- Libre elección";
            break;
        case (gradoElec = "elevado"):
            mostrarCantidadCircuitos.innerText =
                "Se deben usar al menos cinco circuitos: " + "\n" + "2- IUG" + "\n" + "2- TUG" + "\n" + "1- TUE";
            break;
        case (gradoElec = "superior"):
            mostrarCantidadCircuitos.innerText =
                "Se deben usar al menos seis circuitos: " +
                "\n" +
                "2- IUG" +
                "\n" +
                "2- TUG" +
                "\n" +
                "1- TUE" +
                "\n" +
                "1- Libre elección";
            break;

        default:
            mostrarCantidadCircuitos.innerText = "ojo estamos en el caso default";
            break;
    }
}

recuperar.addEventListener("click", renderRooms);

roomsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    roomsForm.reset();
});

calculate.onclick = () => {
    getTotalSurface();
    gradoElectrificacion();
    cantidadDeCircuitosAUsar();
};