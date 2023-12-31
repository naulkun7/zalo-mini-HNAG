import React from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function mealRenderV2({ meal, fadeIn }) {
  if (!meal) return null
  const mealClass = fadeIn ? "row fade-in" : "row"

  return (
    <div className={mealClass}>
      <div className="flex justify-center">
        <div className="w-96 rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-96 object-cover"
            src={meal.image_source}
            alt={meal.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 break-words">
              {meal.name}
            </div>
            <p className="text-gray-700 text-base">Rating: {meal.rating}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href={meal.website}
              className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              <FaFacebook />
            </a>
            <a
              href={"tel:" + meal.phone_number}
              className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              <FaTwitter />
            </a>
            <span className="inline-block bg-pink-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
