import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'markdown')

export function getAllPosts() {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          ...(data as { title: string; date: string }),
          content,
        }
      })

    // 按日期排序
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      contentHtml,
      ...(data as { title: string; date: string }),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
} 