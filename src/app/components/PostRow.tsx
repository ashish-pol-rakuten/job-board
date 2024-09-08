import { Post } from "@/models/Post";
import TimeAgo from "./TimeAgo";

export default function PostRow({post}:{post:Post}) {
  return(
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="flex grow gap-4">
          <div className="grow sm:flex">
            <div className="grow">
              <div className="font-bold text-lg mb-1">
                <div>
                  <div className="text-gray-500 text-sm">{post.author}</div>
                </div>
                <div>{post.title}</div>
              </div>
              <div className="text-gray-900 text-sm capitalize">
                {post.content}
              </div>
            </div>
            {post.createdAt && (
              <div className="content-end text-gray-500 text-sm">
                <TimeAgo createdAt={post.createdAt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}