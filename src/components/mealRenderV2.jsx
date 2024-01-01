import React from "react"
import {
  FaPhone,
  FaGlobe,
  FaMapMarkedAlt,
  FaStar,
  FaClock,
  FaAlignJustify,
} from "react-icons/fa"

export default function mealRenderV2({ meal, fadeIn }) {
  if (!meal) return null
  const mealClass = fadeIn ? "row fade-in" : "row"

  return (
    <div className={mealClass}>
      <div className="flex justify-center">
        <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <img
              className="w-full h-72 object-cover rounded-lg"
              src={meal.image_source}
              alt={meal.name}
            />
          </div>
          <div className="px-6 py-4 text-center">
            <div className="h-10 font-bold text-xl mb-6 break-words">
              {meal.name}
            </div>
            <p className="text-gray-700 text-base flex justify-center items-center uppercase font-semibold">
              Rating: {meal.rating}
              <span className="text-yellow-300 text-base ml-1">
                <FaStar />
              </span>
            </p>
            <p className="text-gray-700 text-base flex justify-center items-center">
              <span className="text-red-500 text-base mr-2">
                <FaClock />
              </span>
              {meal.place_status}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-center items-center  gap-2">
            <a
              href={meal.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 rounded-full px-3 py-3 text-lg font-semibold text-white mr-2 mb-2 hover:bg-blue-700 transition-all duration-500 ease-in-out"
            >
              <FaGlobe />
            </a>
            <a
              href={"tel:" + meal.phone_number}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-400 rounded-full px-3 py-3 text-lg font-semibold text-white mr-2 mb-2 hover:bg-green-600 transition-all duration-500 ease-in-out"
            >
              <FaPhone />
            </a>
            <a
              href={meal.ggmap_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 rounded-full px-3 py-3 text-lg font-semibold text-white mr-2 mb-2 hover:bg-pink-800 transition-all duration-500 ease-in-out"
            >
              <FaMapMarkedAlt />
            </a>
            <button className="inline-block bg-gray-600 rounded-full px-3 py-3 text-lg font-semibold text-white mr-2 mb-2 hover:bg-gray-800 transition-all duration-500 ease-in-out">
              <FaAlignJustify />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
