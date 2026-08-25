import React from 'react'
import { FaHeart } from 'react-icons/fa'
import SocialLinks from '../common/SocialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-white/55 border-t border-gray-200/70 backdrop-blur-sm transition-colors duration-300 dark:bg-gray-950/55 dark:border-gray-800/70">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              Building digital experiences with ❤️
            </p>
          </div>

          <SocialLinks />

          <div className="text-center md:text-right text-gray-600 text-sm dark:text-gray-400">
            <p>© {currentYear} All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center md:justify-end gap-1">
              Made with <FaHeart className="text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
