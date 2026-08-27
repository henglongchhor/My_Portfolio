import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
  FaTimes,
  FaUser,
} from 'react-icons/fa'
import LanguageToggle from '../common/LanguageToggle'
import { useLanguage } from '../../context/useLanguage'

const navIcons = {
  home: FaHome,
  about: FaUser,
  skills: FaCode,
  experience: FaBriefcase,
  projects: FaLaptopCode,
  education: FaGraduationCap,
  certificates: FaCertificate,
  contact: FaEnvelope,
}

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
              {navLinks.map((link, index) => {
                const LinkIcon = navIcons[link.id]

                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavClick(link.id)
                    }}
                  >
                    <LinkIcon
                      className="shrink-0 text-lg text-primary-500/80 transition-colors group-hover:text-primary-500"
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </motion.a>
                )
              })}
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/50">
              <LanguageToggle className="w-full" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
