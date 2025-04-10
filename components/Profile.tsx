import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 fade-in">
      <div className="transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/images/avatar.jpg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full ring-4 ring-blue-100"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transform transition-transform duration-300">
          柿子的美食博客
        </h1>
        <p className="text-gray-600 mt-2 text-lg">分享美食，记录生活</p>
        <div className="flex space-x-4 mt-4 justify-center md:justify-start">
          <a
            href="https://github.com"
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:example@email.com"
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  )
} 