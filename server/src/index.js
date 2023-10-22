// importamos el modulo express

const express = require('express')
// crear una instancia de express
const app = express()
// Puerto en el que se ejecutará el servidor
const PORT = 8000
// Definimos una base de datos de ejemplo en memoria
const database = {
    productos: [
      { id: 1, nombre: 'Producto 1', cantidad: 5 },
      { id: 2, nombre: 'Producto 2', cantidad: 10 },
      { id: 3, nombre: 'Producto 3', cantidad: 15 }
    ]
  }
// Middleware: Procesa la solicitud HTTP antes de que la aplicación la maneje.
// En este caso, 'express.json()' verifica si la solicitud es JSON.
app.use(express.json())
// Ruta de raíz para comprobar el funcionamiento de la API
// app.get('/'): Esto indica que estamos definiendo una ruta GET en la aplicación web 
// utilizando el método GET. app probablemente se refiere a una instancia de la aplicación Express 
// que se ha creado previamente.
// req contiene información sobre la solicitud que se ha realizado, como los encabezados, 
// los parámetros de la URL y otros datos relacionados con la solicitud.
// res se utiliza para construir y enviar la respuesta que se enviará al navegador del cliente.
app.get('/', (req, res) => {
    res.send({ servidor: '¡Hola, mundo!' })
  })
// Ruta para obtener todos los productos
app.get('/api/productos', (req, res) => {
// Devolvemos los productos en formato JSON con un código de estado 200 (OK).
    res.json(database.productos)
  })
// Ruta para crear un nuevo producto
app.post('/api/productos', (req, res) => {
    // Obtenemos el producto a agregar desde el cuerpo de la solicitud (req.body).
    // req.body es una referencia a la propiedad body del objeto req. 
    // En el contexto de un servidor web, req a menudo representa la solicitud HTTP entrante (request). 
    // La propiedad body generalmente contiene los datos enviados en el cuerpo de la solicitud HTTP, 
    // como parámetros de formulario o datos JSON.
    const nuevoProducto = req.body
    // Agregamos el nuevo producto a la base de datos.
    database.productos.push(nuevoProducto)
    // Devolvemos el producto agregado en formato JSON junto con un mensaje de éxito.
    res.json({ message: 'Producto agregado correctamente', producto: nuevoProducto })
  })
  // Configuramos la aplicación para escuchar en el puerto especificado.
app.listen(PORT, () => {
  console.log(`La API se está ejecutando en: 🚀🚀🚀 http://localhost:${PORT} 🚀🚀🚀`)
})
// Añade los siguientes scripts en el archivo package.json para poder ejecutar la aplicación en modo desarrollo o normal:

// "scripts": {
//  "start": "node ./src/index.js",
//  "dev": "node --watch ./src/index.js"
// }
