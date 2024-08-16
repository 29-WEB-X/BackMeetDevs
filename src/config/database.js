import mongoose from 'mongoose';

mongoose.connection.on('open', () => {
  console.log('Conexión a la base de datos exitosa');
});

mongoose.connection.on('error', (error) => {
  console.error('Error al conectarse en la base de datos');
  console.error(error);
});

mongoose.connect('mongodb://mongo:27017/devsstorage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
