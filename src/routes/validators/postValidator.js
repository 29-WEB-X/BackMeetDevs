import vine from '@vinejs/vine';

const createPost = vine.object({
  text: vine.string(),
});

export { createPost };
