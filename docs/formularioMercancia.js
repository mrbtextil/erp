// Obtener el formulario
const form = document.getElementById("mercanciaForm");

// Cargar la lista de mercancías desde localStorage (si existe)
let mercanciaDict = JSON.parse(localStorage.getItem("mercanciaList")) || {};

// Escuchar el evento de envío del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto (enviar el formulario)

    // Obtener los valores de los campos del formulario
    const tela = document.getElementById("tela").value;
    const color = document.getElementById("color").value;
    const metros = document.getElementById("metros").value;

    // Crear un objeto con los datos
    const mercanciaData = {
        tela: tela,
        color: color,
        metros: metros
    };
   // Guardar los datos en el diccionario utilizando 'tela' como clave
   mercanciaDict[tela] = mercanciaData;

   // Guardar el diccionario actualizado en localStorage
   localStorage.setItem("mercanciaDict", JSON.stringify(mercanciaDict));


    // Mostrar mensaje de éxito (opcional)
    alert("¡Mercancía registrada correctamente!");

    // Limpiar el formulario
    form.reset();
});
