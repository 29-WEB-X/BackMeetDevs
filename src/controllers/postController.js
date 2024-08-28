import Post from '../models/Post.js';

const create = async (req, res) => {
  if (req.files && req.files.length > 0) {
    req.body.images = req.files.map((file) => file.path);
  } else {
    req.body.images = [];
  }

  const newPost = await Post.create({
    author: req.user.id,
    ...req.body,
  });

  return res.json({
    msg: 'Post created',
    post: newPost,
  });
};

export { create };
