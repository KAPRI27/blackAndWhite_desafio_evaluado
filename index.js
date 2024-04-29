//Paso 1:Importar Express y levantar un servidor en el puerto 3000.

const express = require ('express');
const bootstrap = require ('bootstrap')

const app = express();

app.listen(3000, console.log("server ON"))
//Paso 2:Crea una ruta raíz / GET.

app.get("/", (req, res) => {
	res.send("Servidor funcionando =D !");
})

