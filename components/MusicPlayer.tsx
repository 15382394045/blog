'use client'

import { useState, useRef } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        onError={(e) => console.error('音频加载错误:', e)}
      />
      <button
        onClick={togglePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isPlaying ? '暂停' : '播放'}
      </button>
    </div>
  )
} 