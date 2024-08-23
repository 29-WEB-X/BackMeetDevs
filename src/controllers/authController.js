import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      msg: 'Invalid Body',
    });
  }

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    const { email, nickname } = req.body;
    const duplicated = await User.findOne({
      $or: [{ email }, { nickname }],
    });

    if (duplicated) {
      return res.status(400).json({
        msg: 'Duplicated user',
      });
    }

    const newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.status(201).json({
      msg: 'Usuario creado',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error registrando usuario',
    });
  }
};

export const login = async (req, res) => {
  if ((!req.body.nickname && !req.body.email) || !req.body.password) {
    return res.status(400).json({ msg: 'Faltan datos para iniciar sesión' });
  }
  try {
    let user = null;
    const userByNickname = await User.findOne({ nickname: req.body.nickname });
    const userByEmail = await User.findOne({ email: req.body.email });
    if (!userByNickname && !userByEmail) {
      return res.status(401).json({ msg: 'Datos incorrectos' });
    } else {
      user = userByNickname || userByEmail;
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(400).json('Datos incorrectos');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    return res.status(200).json({
      _id: user._id,
      email: user.email,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({ msg: `Error al iniciar sesión:${error}` });
  }
};
