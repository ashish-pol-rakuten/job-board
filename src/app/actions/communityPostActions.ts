'use server';

import { PostModel } from "@/models/Post";
import mongoose from "mongoose";

export async function saveCommunityPostAction(data: any){
  await mongoose.connect(process.env.MONGO_URI as string);
  const postDoc = await PostModel.create(data);
  return JSON.parse(JSON.stringify(postDoc));
}