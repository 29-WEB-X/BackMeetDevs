// import Post from '../models/Post.js';

const create = async (req, res) => {
  return res.json({
    msg: 'create post',
    userId: req.user.id,
  });
};

export { create };
