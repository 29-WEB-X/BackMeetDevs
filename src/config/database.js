import mongoose from 'mongoose';

mongoose.connection.on('open', () => {
  console.log('Conexión a la base de datos exitosa');
  console.log(`MONGO_URI ${process.env.MONGO_URI}`);
});

mongoose.connection.on('error', (error) => {
  console.error('Error al conectarse en la base de datos');
  console.error(error);
});

// 'mongodb://mongo:27017/devsstorage'
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
