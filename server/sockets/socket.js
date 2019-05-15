const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido...'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data,callback) => {
        console.log(data);

        //Broadcast -> a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);
        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        }else {
            callback({
                resp: 'ALGO SALIO MAL'
            })
        }*/
    })
})