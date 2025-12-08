"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { BASE_VOUCHES, USER_NAMES, generateUniqueUsername, generateTimeAgo } from "@/lib/vouches-data"

interface Review {
  id: number
  name: string
  service: string
  rating: number
  text: string
  timeAgo: string
}

const generateReviews = (): Review[] => {
  const NUM_VOUCHES = 250
  const reviews: Review[] = []
  const availableNames = [...USER_NAMES]

  for (let i = 0; i < NUM_VOUCHES; i++) {
    const baseVouch = BASE_VOUCHES[i % BASE_VOUCHES.length]
    reviews.push({
      id: i,
      name: generateUniqueUsername(i, availableNames),
      service: baseVouch.service,
      rating: 5,
      text: baseVouch.text,
      timeAgo: generateTimeAgo(NUM_VOUCHES - 1 - i), // Reverse order so latest is first
    })
  }

  return reviews.reverse()
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    setReviews(generateReviews())
  }, [])

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Customer Vouches</h2>
        <p className="text-center text-gray-400 mb-16">Join thousands of satisfied customers who trust RESONIX</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Service */}
              <p className="text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wide">{review.service}</p>

              {/* Review Text */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{review.text}</p>

              {/* Author & Time */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                <div>
                  <p className="font-semibold text-white text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.timeAgo}</p>
                </div>
                <div className="text-cyan-400 font-bold">✓</div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold py-3 px-8 rounded-lg transition-all hover:shadow-2xl hover:shadow-cyan-500/50">
            View All 250+ Vouches
          </button>
          <p className="text-gray-400 text-sm mt-4">⭐⭐⭐⭐⭐ 4.9 Rating • 9250+ Reviews</p>
        </div>
      </div>
    </section>
  )
}
