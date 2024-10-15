import express from 'express'  // importamos express para usarlo en nuestro archivo main
import 'dotenv/config.js' // importamos dotenv para utilizar las variables de entorno

const server = express() // guardamos en la constante server todo lo que trae express

const PORT = process.env.PORT

const ready = () => {
    console.log('Hoal estoy en el puerto ' + PORT );
    
}



server.get('/', (request, response) => {    //esta es la forma de crear un endpoint, es una peticion de tipo GET
    response.send('hola mundo en express')
})



server.listen(PORT, ready)  //la propiedad listen solicita un puerto para ejecurar una funcion que son los dos parametros que le damos


console.log(process.env.PORT); // estas son las variables de entorno
