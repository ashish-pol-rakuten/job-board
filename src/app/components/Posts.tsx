import { Post } from "@/models/Post";
import PostRow from "./PostRow";

export default function Posts({posts}:{posts:Post[]}) {
  return (
    <div className="bg-blue-100 py-6 rounded-3xl">
      <div className="container">
        <h2 className="font-bold mb-4">{'Recent Posts'}</h2>

        <div className="flex flex-col gap-4">
          {!posts?.length && (
            <div>No jobs found</div>
          )}
          {posts && posts.map(post => (
            <PostRow post={post} key={post._id}/>
          ))}
        </div>

      </div>
    </div>
  );
}