'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => { 
    const server = Hapi.server({
<<<<<<< HEAD
        port: 8888,
=======
        port: 3000,
>>>>>>> 161b29497e12db21a23319a2ec0a979c77d783b1
        host: 'localhost',
        routes: {
            cors: true
        }
    });
    server.route(require('./routes/getClients'));
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();