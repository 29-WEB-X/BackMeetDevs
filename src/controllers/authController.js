import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.json({
      msg: 'Usuario creado',
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error registrando usuario',
    });
  }
};
