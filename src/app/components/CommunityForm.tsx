"use client";

import { Box, Button, TextArea, TextField, Theme } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import { useState } from "react";
import { saveCommunityPostAction } from "../actions/communityPostActions";

export default function CommunityForm({name}: {name:string}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSaveCommunityPost() {
    const data = {
      author: name,
      title: title,
      content: content,
    }
    const PostDoc = await saveCommunityPostAction(data);
    redirect("/community");
  }

  return (
    <div className="my-8 w-full">
      <div className="bg-white py-8 px-6 shadow rounded-lg">
        <form action={handleSaveCommunityPost} className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            className="border-2 p-2 border-gray-500 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            name="content"
            required
            className="border-2 p-2 border-gray-500 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
