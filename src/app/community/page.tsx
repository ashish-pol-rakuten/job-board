"use server";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser } from '@workos-inc/authkit-nextjs';
import CommunityForm from '../components/CommunityForm';
import { PostModel } from '@/models/Post';
import Posts from '../components/Posts';

export default async function CommunityPage() {
  const {user} = await getUser();
  const postData = await PostModel.find({}, {}, {sort: '-createdAt'});
  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post or view community posts</div>
      </div>
    );
  }

  const userName = user.firstName + " " + user.lastName;

  return (
    <div className='container'>
        <h2 className="text-lg mt-6">Community Page</h2>
        <p className="text-gray-500 text-sm mb-2">Create a community post which is visible to everyone</p>
        <CommunityForm name={userName} />
        <Posts posts={postData}/>
    </div>
  )
}