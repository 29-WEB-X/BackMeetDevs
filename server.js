import http from 'http';
import api from './src/api.js';

const server = http.createServer(api);
const PORT = 8000;

server.on('listening', () => {
  console.log(`Server corriendo en puerto ${PORT} `);
});

server.on('error', (error) => {
  console.error('Error en el servidor');
  if (error.code == 'EADDRINUSE') {
    console.error(`Puerto ${PORT} ya está siendo usado`);
  }
});

server.listen(PORT);
