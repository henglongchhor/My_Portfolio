import React from 'react'
import { FaHeart } from 'react-icons/fa'
import SocialLinks from '../common/SocialLinks'
import { useLanguage } from '../../context/useLanguage'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 bg-white/55 border-t border-gray-200/70 backdrop-blur-sm transition-colors duration-300 dark:bg-gray-950/55 dark:border-gray-800/70">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text">{t('brand')}</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>

          <SocialLinks />

          <div className="text-center md:text-right text-gray-600 text-base dark:text-gray-400">
            <p>© {currentYear} {t('footer.rights')}</p>
            <p className="mt-1 flex items-center justify-center md:justify-end gap-1">
              {t('footer.madeWith')} <FaHeart className="text-red-500" /> {t('footer.using')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
