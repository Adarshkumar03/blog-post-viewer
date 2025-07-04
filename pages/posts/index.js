import { useEffect, useState } from "react";
import PostDetail from "../components/PostDetail";
import PostList from "../components/PostList";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  return { props: { posts: data.posts } };
}
 
export default function Page({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white py-10 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Blog Posts
        </h1>

        <PostList posts={posts} onPostClick={handlePostClick} />

        {selectedPost && <PostDetail post={selectedPost} onClose={closeModal} />}
      </div>
    </div>
  );
}