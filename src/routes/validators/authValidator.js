import vine from '@vinejs/vine';

const loginSchema = vine.object({
  email: vine.string().email().optional().requiredIfMissing('nickname'),
  nickname: vine.string().optional().requiredIfMissing('email'),
  password: vine.string(),
});

const registerSchema = vine.object({
  name: vine.string(),
  email: vine.string().email(),
  birthday: vine.date(),
  country: vine.string(),
  gender: vine.string(),
  nickname: vine.string(),
  profession: vine.string(),
  avatar: vine.string().optional(),
  password: vine.string(),
});

export { loginSchema, registerSchema };
