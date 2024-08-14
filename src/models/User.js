import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  birthday: {
    required: true,
    type: Date,
  },
  country: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
  nickname: {
    required: true,
    type: String,
    unique: true,
  },
  profession: {
    required: true,
    type: String,
  },
  avatar: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model('User', userSchema);
