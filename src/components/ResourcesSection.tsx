import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

// Replace 'your-cloud-name' below with your actual Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'dngbuuts0'

export function getCloudinaryUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}.mp4`
}

export function getCloudinaryThumbnail(publicId: string) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/so_0/${publicId}.jpg`
}

export type VideoCard = {
  title: string
  description: string
  duration: string
  cloudinaryId: string // Cloudinary public ID — empty string = coming soon
}

export const allVideos: VideoCard[] = [
  {
    title: 'Getting Started with Ajoti',
    description: 'A quick walkthrough of the platform — create your account, set up your profile, and explore the dashboard.',
    duration: '3:24',
    cloudinaryId: 'Regular_user_Onboarding_p7v8ts',
  },
  {
    title: 'How to Create a Savings Circle',
    description: 'Step-by-step guide to setting up your first circle, defining contribution amounts, and inviting members.',
    duration: '4:10',
    cloudinaryId: 'creating_a_rosca_cycle_d1aylo',
  },
  {
    title: 'Completing Your KYC Verification',
    description: 'A step-by-step guide to verifying your identity on Ajoti so you can access all platform features including deposits and withdrawals.',
    duration: '',
    cloudinaryId: 'KYC_1_zltj5u',
  },
  {
    title: 'Managing Contributions & Payouts',
    description: 'Learn how to track member contributions, handle missed payments, and ensure smooth payout rotations.',
    duration: '5:05',
    cloudinaryId: '',
  },
  {
    title: 'Understanding Your Trust Score',
    description: 'Discover how your financial reputation is built on Ajoti and how a strong trust score unlocks better opportunities.',
    duration: '2:50',
    cloudinaryId: '',
  },
  {
    title: 'Inviting & Managing Members',
    description: 'How to add trusted members to your circle, set roles, and keep everyone accountable.',
    duration: '3:45',
    cloudinaryId: '',
  },
  {
    title: 'Ajoti for Community Groups',
    description: 'See how churches, co-ops, and associations use Ajoti to run structured savings programmes at scale.',
    duration: '6:12',
    cloudinaryId: '',
  },
]

function VideoCard({ card, index, inView }: { card: VideoCard; index: number; inView: boolean }) {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(card.cloudinaryId)
  const thumbnailUrl = hasVideo ? getCloudinaryThumbnail(card.cloudinaryId) : null
  const videoUrl = hasVideo ? getCloudinaryUrl(card.cloudinaryId) : null

  return (
    <div
      className={`fade-in-up delay-${(index % 3) + 1} ${inView ? 'visible' : ''} group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300`}
    >
      {/* Thumbnail / Player */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-teal-800 to-teal-600 overflow-hidden">
        {playing && videoUrl ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
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

      {/* Card body */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-teal-700 transition-colors">
          {card.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}

export default function ResourcesSection() {
  const { ref, inView } = useInView()
  const preview = allVideos.slice(0, 3)

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12`}>
          <div>
            <span className="text-teal-600 text-xs font-semibold uppercase tracking-widest">Learn Ajoti</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Resources & Tutorials</h2>
            <p className="mt-2 text-gray-500 text-sm max-w-md">
              Videos to help you get the most out of Ajoti — from onboarding to managing your circle like a pro.
            </p>
          </div>
          <Link
            to="/resources"
            className="shrink-0 text-sm font-semibold text-teal-700 hover:text-teal-900 border border-teal-600 hover:border-teal-800 px-5 py-2.5 rounded-lg transition-colors"
          >
            View all videos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {preview.map((card, i) => (
            <VideoCard key={card.title} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
