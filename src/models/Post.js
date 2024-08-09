import { Schema, model } from 'mongoose';

const postSchema = new Schema(
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
    images: {
      type: [String],
    },
    poll: {
      //TODO poll schema
      type: {},
    },
  },
  {
    timestamps: true,
  }
);

export default model('Post', postSchema);
