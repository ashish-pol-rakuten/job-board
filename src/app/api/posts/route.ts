import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { PostModel } from '@/models/Post';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URI as string);

  switch (req.method) {
    case 'GET':
      const posts = await PostModel.find({});
      res.status(200).json(posts);
      break;
    case 'POST':
      const { title, content, author } = req.body;
      const newPost = new PostModel({ title, content, author });
      await newPost.save();
      res.status(201).json(newPost);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
