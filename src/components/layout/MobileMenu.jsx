import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import LanguageToggle from '../common/LanguageToggle'
import { useLanguage } from '../../context/useLanguage'

const MobileMenu = ({ isOpen, onClose, navLinks, onNavClick }) => {
  const { t } = useLanguage()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-40 h-full w-80 max-w-[80%] bg-white/95 text-gray-900 backdrop-blur-xl shadow-2xl lg:hidden dark:bg-gray-900/95 dark:text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-bold gradient-text">{t('brand')}</span>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-950 hover:bg-gray-100 rounded-lg transition-colors dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
                aria-label={t('controls.closeMenu')}
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-950 hover:bg-gray-100 rounded-lg transition-all duration-200 text-base font-medium dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavClick(link.id)
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 opacity-60"></span>
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/50">
              <LanguageToggle className="w-full" />
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors dark:text-gray-400 dark:hover:text-white">
                  GitHub
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors dark:text-gray-400 dark:hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors dark:text-gray-400 dark:hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
