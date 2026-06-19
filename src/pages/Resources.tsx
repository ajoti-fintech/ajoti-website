import { useState } from 'react'
import { allVideos, getCloudinaryUrl, getCloudinaryThumbnail, type VideoCard as VideoCardType } from '../components/ResourcesSection'

function VideoCard({ card }: { card: VideoCardType }) {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(card.cloudinaryId)
  const thumbnailUrl = hasVideo ? getCloudinaryThumbnail(card.cloudinaryId) : null
  const videoUrl = hasVideo ? getCloudinaryUrl(card.cloudinaryId) : null

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300">
      <div className="relative w-full aspect-video bg-gradient-to-br from-teal-800 to-teal-600 overflow-hidden">
        {playing && videoUrl ? (
          <video src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
        ) : thumbnailUrl ? (
          <>
            <img src={thumbnailUrl} alt={card.title} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-teal-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="text-white/50 text-xs font-medium">Coming Soon</span>
          </div>
        )}
        {!playing && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono">
            {card.duration}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-teal-700 transition-colors">{card.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-teal-900 to-teal-700 py-20 px-6 text-center">
        <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
          Learn at your pace
        </span>
        <h1 className="text-4xl font-extrabold text-white">Resources & Tutorials</h1>
        <p className="mt-4 text-white/70 text-sm max-w-md mx-auto">
          Everything you need to get started, grow your savings circle, and make the most of Ajoti.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allVideos.map((card) => (
            <VideoCard key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">More videos coming soon</h2>
          <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto">
            We're creating more tutorials to help you and your community get the most out of Ajoti.
          </p>
          <a
            href="https://user.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Using Ajoti
          </a>
        </div>
      </div>
    </div>
  )
}
