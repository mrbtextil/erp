// Recuperar los datos de mercancías desde localStorage
function cargarMercancias() {
    // Obtener los datos almacenados de mercancías en localStorage
    const mercanciaDict = JSON.parse(localStorage.getItem("mercanciaDict")) || {};

    // Obtener el contenedor del cuerpo de la tabla
    const tablaBody = document.getElementById("tabla-body");

    // Limpiar el cuerpo de la tabla (por si ya tiene filas anteriores)
    tablaBody.innerHTML = '';

    // Recorrer el diccionario de mercancías y agregar las filas a la tabla
    for (const tela in mercanciaDict) {
        const mercancia = mercanciaDict[tela];
        const row = document.createElement("tr");

        // Crear las celdas para cada fila
        const cellTela = document.createElement("td");
        cellTela.textContent = tela;

        const cellColor = document.createElement("td");
        cellColor.textContent = mercancia.color;

        const cellMetros = document.createElement("td");
        cellMetros.textContent = mercancia.metros;

        const cellEliminar = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.className = "button btn-delete";
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function() {
            eliminarFila(row, tela);
        };

        cellEliminar.appendChild(btnEliminar);

        // Agregar las celdas a la fila
        row.appendChild(cellTela);
        row.appendChild(cellColor);
        row.appendChild(cellMetros);
        row.appendChild(cellEliminar);

        // Agregar la fila al cuerpo de la tabla
        tablaBody.appendChild(row);
    }
}

// Filtrar la tabla según los valores de los filtros
function filtrarTabla() {
    const filtroTela = document.getElementById('filtro-tela').value.toLowerCase();
    const filtroColor = document.getElementById('filtro-color').value.toLowerCase();
    const filtroMetros = document.getElementById('filtro-metros').value.toLowerCase();

    // Obtener todas las filas de la tabla
    const filas = document.querySelectorAll('#tabla-telas tbody tr');

    // Recorrer todas las filas y ocultar las que no coincidan con los filtros
    filas.forEach(function(fila) {
        const celdas = fila.getElementsByTagName('td');
        const tela = celdas[0].textContent.toLowerCase();
        const color = celdas[1].textContent.toLowerCase();
        const metros = celdas[2].textContent.toLowerCase();

        // Verificar si la fila coincide con todos los filtros
        if (
            tela.includes(filtroTela) &&
            color.includes(filtroColor) &&
            metros.includes(filtroMetros)
        ) {
            fila.style.display = ''; // Mostrar fila
        } else {
            fila.style.display = 'none'; // Ocultar fila
        }
    });
}

// Eliminar una fila de la tabla y actualizar localStorage
function eliminarFila(fila, tela) {
    // Eliminar la fila del DOM
    fila.remove();

    // Recuperar los datos de mercancías desde localStorage
    const mercanciaDict = JSON.parse(localStorage.getItem("mercanciaDict")) || {};

    // Eliminar el objeto correspondiente a la tela del diccionario
    delete mercanciaDict[tela];

    // Guardar el diccionario actualizado en localStorage
    localStorage.setItem("mercanciaDict", JSON.stringify(mercanciaDict));

    // Re-cargar la tabla actualizada
    cargarMercancias();
}

// Llamar a cargarMercancias cuando se carga la página
window.onload = cargarMercancias;
