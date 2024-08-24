import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import CustomError from '../utils/CustomError.js';
import jwt from 'jsonwebtoken';
import ERROR_CODES from '../utils/errorCodes.js';

export const register = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);

  const { email, nickname } = req.body;
  const duplicated = await User.findOne({
    $or: [{ email }, { nickname }],
  });

  if (duplicated) {
    throw new CustomError(ERROR_CODES.DUPLICATED_USER);
  }

  if (!req.body.avatar) {
    req.body.avatar = `https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=${nickname}`;
  }

  const newUser = await User.create(req.body);
  newUser.password = undefined;
  return res.status(201).json({
    msg: 'Usuario creado',
    user: newUser,
  });
};

export const login = async (req, res) => {
  const userByNickname = await User.findOne({ nickname: req.body.nickname });
  const userByEmail = await User.findOne({ email: req.body.email });
  let user = userByNickname || userByEmail;

  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    throw new CustomError(ERROR_CODES.INVALID_PASSWORD);
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  return res.status(200).json({
    _id: user._id,
    email: user.email,
    token: token,
  });
};
