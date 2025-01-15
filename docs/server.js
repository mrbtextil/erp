// server.js
import express from 'express'
import { createClient } from 'redis';
import responseTime from 'response-time';
//const bodyParser = require('body-parser');
//const path = require('path');


// Crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (como tu archivo HTML)
//app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.use(responseTime());
//app.use(bodyParser.json()); // Para que Express pueda entender JSON

const client = createClient();
await client.connect();

// Ruta para recibir datos del formulario
app.post('/submit', async (req, res) => {
    // Obtener los datos enviados desde el cliente
    const { tela, color, metros } = req.body;

    console.log('Datos recibidos:', { tela, color, metros });
    try {
        await client.set(key, value, options);
        res.send(`la clave ${key} seguardo con es valor ${value}`);
    } catch(err){
        res.status(400).send(`error al guardar la clave: ${err.message}`);
    }
    // Aquí puedes procesar los datos, guardarlos en una base de datos, etc.
    // En este caso, simplemente respondemos con un mensaje de éxito.

  
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});