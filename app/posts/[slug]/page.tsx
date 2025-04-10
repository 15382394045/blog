import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return {
      title: '文章未找到',
    }
  }
  return {
    title: post.title,
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
      <div className="text-gray-600 mb-8">{post.date}</div>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </article>
  )
} 