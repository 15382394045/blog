import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  content: string
}

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return <div>暂无文章</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post, index) => (
        <div
          key={post.slug}
          className="animate-fadeIn"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
        >
          <Link
            href={`/posts/${post.slug}`}
            className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-102 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 line-clamp-3">
              {post.content.substring(0, 200)}...
            </p>
            <div className="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>阅读更多</span>
              <svg 
                className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
} 