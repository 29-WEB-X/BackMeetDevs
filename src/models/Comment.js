import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    author: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    text: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Comment', commentSchema);
