import mongoose from 'mongoose';

mongoose.connection.on('open', () => {
  console.log('Database conection stablished');
});

mongoose.connection.on('error', (error) => {
  console.error('Error al conectarse en la base de datos');
  console.error(error);
});

// 'mongodb://mongo:27017/devsstorage'
mongoose.connect(process.env.MONGO_URI);
