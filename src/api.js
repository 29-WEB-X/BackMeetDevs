import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js';

const api = express();

api.use(express.json());

api.use(morgan('dev'));

/**TODO: La magia */

/**
 * auth
 *  register /auth/register POST
 *  login   /auth/login POST
 *  verifyEmail /auth/verify GET
 *  resendEmail /auth/resend POST
 *  me token /auth/me GET
 *  updateInfo token /auth/udpate PUT o PATCH
 * posts
 *  post token /posts POST
 *  getGeneralPosts token /posts?s=general GET
 *  getForYouPosts token  /posts?s=fyp GET
 *  getMyPosts token /myposts GET
 *  getPostById token /posts/{postId} GET
 * users
 *  getUserPosts token /users/{userId}/posts GET
 * comments
 *  comment token /posts/{postId}/comments POST
 * likes
 *  like token /posts/{postId}/like PUT
 *  getMyLikes token /mylikes GET
 * follow
 *  follow  token /users/{userId}/follow PUT
 *  follows token /users/{userId}/followers GET
 *  following token /users/{userId}/following GET
 *
 * ** Notifications
 *
 */

api.use('/auth', authRouter);

api.get('/test', (req, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.get('/', (req, res) => {
  return res.json({
    msg: 'Ruta princiapal',
  });
});

export default api;
