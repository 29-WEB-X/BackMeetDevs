import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const api = express();

api.use(express.json());

api.use(morgan('dev'));

/**TODO: La magia */

/**
 * auth
 *  register /auth/register POST ✅
 *  login   /auth/login POST - Adrian Juárez
 *  verifyEmail /auth/verify GET
 *  resendEmail /auth/resend POST
 *  me token /auth/me GET
 *  updateInfo token /auth/udpate PUT o PATCH Angel Santiago
 * posts
 *  post token /posts POST
 *  getGeneralPosts token /posts?s=general GET Isaac Contreras
 *  getForYouPosts token  /posts?s=fyp GET Isaac Contreras
 *  getPostById token /posts/{postId} GET Jhonatan
 * users
 *  getUserPosts token /users/{userId}/posts GET
 * comments
 *  comment token /posts/{postId}/comments POST
 * likes
 *  like token /posts/{postId}/like PUT
 *  getMyLikes token /mylikes GET
 * follow
 *  follow  token /users/{userId}/follow PUT Jorge
 *  follows token /users/{userId}/followers GET Sait Uzziel
 *  following token /users/{userId}/following GET
 *
 * ** Notifications
 *
 */

api.use('/auth', authRouter);
api.use('/users', userRouter);

api.get('/test', (req, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.get('/', (req, res) => {
  return res.json({
    msg: 'Ruta princiapal cambiada again',
  });
});

export default api;
