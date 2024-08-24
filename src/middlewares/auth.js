import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      msg: 'Missing token in headers',
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { userId } = payload;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(403).json({
        msg: 'Forbidden route',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Invalid token',
      error,
    });
  }
};

export default authenticate;
