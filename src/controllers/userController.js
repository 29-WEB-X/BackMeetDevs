import User from '../models/User.js';

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

export { changeImage };
