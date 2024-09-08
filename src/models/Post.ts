import mongoose, { Schema, models, model } from 'mongoose';

export type Post = {
  _id: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
};


const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
}, {
  timestamps: true,
});

export const PostModel = models?.Post || model('Post', PostSchema);
