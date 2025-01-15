const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tela = document.getElementById('tela').value;
    const color = document.getElementById('color').value;
    const metros = document.getElementById('metros').value;

    // Enviar los datos al servidor usando fetch
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tela: tela,
            color: color,
            metros: metros
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert(data.message); // Mostrar el mensaje del servidor al usuario
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
    });
});