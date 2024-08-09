import { Schema, model } from 'mongoose';

const likeSchema = new Schema(
  {
    post: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    likedBy: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default model('Like', likeSchema);
