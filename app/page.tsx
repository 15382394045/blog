import Profile from '@/components/Profile'
import PostList from '@/components/PostList'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Profile />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">我的作品</h2>
        <PostList posts={posts} />
      </div>
    </main>
  )
} 