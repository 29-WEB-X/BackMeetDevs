import express from 'express';
import morgan from 'morgan';

const api = express();

api.use(morgan('dev'));

/**TODO: La magia */

api.get('/test', (req, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

export default api;
