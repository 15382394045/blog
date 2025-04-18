/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 为了静态导出
  },
  basePath: '/blog',  // 设置基础路径为你的仓库名
  trailingSlash: true,
}

module.exports = nextConfig 