export default function PostList({ posts, onPostClick }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <li
          key={post.id}
          onClick={() => onPostClick(post)}
          className="cursor-pointer group p-6 bg-white border border-gray-200 rounded-2xl shadow-sm 
                     hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                     hover:ring-2 hover:ring-blue-300 
                     transform transition-all duration-300 ease-in-out"
        >
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
        </li>
      ))}
    </ul>
  );
}
