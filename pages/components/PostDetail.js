import { format } from 'date-fns';

export default function PostDetail({ post, onClose }) {
  if (!post) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30 px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 text-center text-gray-600">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl transition-colors"
            aria-label="Close modal"
          >
            &times;
          </button>
          <p className="text-lg font-medium">Something went wrong. Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30 px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h2>

        {/* Author & Date */}
        <p className="text-sm text-gray-500 mb-6">
          By <span className="font-medium text-gray-700">{post.author}</span> ·{' '}
          {format(new Date(post.published_at), 'dd MMM yyyy, hh:mm a')}
        </p>

        {/* Content */}
        <div className="text-gray-800 text-base leading-relaxed space-y-4">
          {post.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full tracking-wide"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
