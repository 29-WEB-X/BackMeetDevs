import User from '../models/User.js';
import bcrypt from 'bcryptjs';

/**
 * cloud name
 * api key
 * api secret
 */

const changeImage = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.userId, {
      avatar: req.file.path,
    });
    return res.json({
      msg: 'Avatar actualizado',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al cambiar imagen',
      error,
    });
  }
};


  const updateUser = async (req, res) => {
  const userId = req.user.userId;
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);

    await user.save();

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


export { changeImage , updateUser  };
